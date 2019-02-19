import React, {Component} from 'react'
import './studentgrades.css'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../../ducks/reducer'
import axios from 'axios';
import ListItem from
'../../../../../GlobalComponents/ListItem/ListItem'
import StudentGradeInformationalComponent from '../../../../../GlobalComponents/ListItem/InformationalComponents/StudentGradeInformationalComponent'


class StudentGrades extends Component {
    state = {
        promises: [],
        studentData: []
    }
componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        let promises = [];
        let { studentList } = this.props;
        //bringing in data for each student
        console.log(studentList)
        studentList.forEach(item => {
            promises.push(axios.get(`/math/score?id=${item.id}`))
        })
        console.log(promises);
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

        let students = this.props.studentList.map((item, i) =>
        {
            return (
                <ListItem
                    key={item.id}
                    item={item}
                    deleteFn={this.deleteStudent}
                    InformationalComponent={<StudentGradeInformationalComponent item={item}
                    hideDelete={true}
                />}
                />
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
