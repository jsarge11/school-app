import React, {Component} from 'react'
import './studentgrades.css'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../../ducks/reducer'
import axios from 'axios';


class StudentGrades extends Component {
    state = {
        promises: [],
        studentData: []
    }
componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        let promises = [];
        let { studentList } = this.props;

        //bringing in data for each student, didn't use a join statement because of the amount of data returned
        studentList.forEach(item => {
            promises.push(axios.get(`/math/score?id=${item.id}`))
        })
        axios.all(promises).then(res => {
            this.setState({ studentData: res })
        })
    }
}
componentWillUnmount() {
    this.props.setStudentList([]);
}
showScores(id) {

}
render() {
        let students = this.props.studentList.map((item, i) => {
            return (
                <div key={item.st_id}>
                    <p>{item.first_name}</p>
                </div>
            )
        })
        return (
           <div id="student-grade-wrapper">
            {students}
           </div>
        )
    }
}
function mapStateToProps(state) {
    let { user, classroom, studentList } = state;
    return {
        user,
        classroom,
        studentList
    }
}
export default connect(mapStateToProps, { setStudentList })(StudentGrades)
