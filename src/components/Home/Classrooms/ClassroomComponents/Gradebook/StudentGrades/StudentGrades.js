import React, {Component} from 'react'
import './studentgrades.css'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../../ducks/reducer'
import axios from 'axios';
import ListItem from '../../../../../ListItem/ListItem'
import StudentInformationComponent from '../../../../../ListItem/InformationalComponents/StudentInformationComponent'


class StudentGrades extends Component {
    state = {
        promises: [],
        studentData: []
    }
componentDidMount() {
        let promises = [];
        let { studentList } = this.props;
        console.log(studentList);

        //bringing in data for each student

        studentList.forEach(item => {
            promises.push(axios.get(`/math/score?id=${item.id}`))
        })
        axios.all(promises).then(res => {
            this.setState({ studentData: res })
        })
}

deleteStudent(id) {
    console.log(id);
}
componentWillUnmount() {
    this.props.setStudentList([]);
}
render() {
        let students = this.props.studentList.map((item, i) => 
        {
            return (
                <ListItem 
                    key={item.id}
                    item={item}
                    deleteFn={this.deleteStudent}
                    InformationalComponent={<StudentInformationComponent item={item}
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
