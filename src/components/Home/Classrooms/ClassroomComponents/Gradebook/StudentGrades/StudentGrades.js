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
        console.log("Student List:", studentList);

        studentList.map(item => {
            promises.push(axios.get(`/math/score?id=${item.st_id}`))
        })
        axios.all(promises).then(res => {
            this.setState({ studentData: res })
        })
    }
}
componentWillUnmount() {
    this.props.setStudentList([]);
}
render() {
        console.log(this.state.studentData);
        return (
           <div id="student-grade-wrapper">
            {/* {students} */}
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
