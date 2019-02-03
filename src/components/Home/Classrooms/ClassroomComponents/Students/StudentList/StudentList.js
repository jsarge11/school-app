import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../../ducks/reducer'
import './studentlist.css'
import Scores from './Scores/Scores';
import StudentAssessments from './StudentCourses/StudentAssessments';
import axios from 'axios'

class StudentList extends Component {

state = {
  assessmentValue: 1
}
deleteStudent = (id, c_id) => {
  axios.delete(`/students?id=${id}&c_id=${c_id}`).then(res => {
    this.props.setStudentList(res.data[0]);
  }).catch(error => console.log(error))
}

render() {
  let students = this.props.studentList.map(student => {
    return (
     <div key={student.st_id} className="student-list-item">
      <p>
        STUDENT NAME:&nbsp;
        {student.first_name}&nbsp;
        {student.last_name}
      </p>
      <p>PIN: {student.pin}</p>
      <p>POINTS: {student.points}</p>
      <p>GRADE: {student.grade}</p>
      <StudentAssessments student={student}/>
      <Scores student={student} />
      <p className="delete-student" style={{cursor: 'pointer'}} onClick={() => this.deleteStudent(student.st_id, student.c_id)}>&#128465;</p>
     </div>
    )
   })

   return (
     <div id="student-list-wrapper">
      {students}
     </div>
    )
  }
}
function mapStateToProps(state) {
 let { studentList } = state;
 return {
  studentList,
 }
}
export default connect(mapStateToProps, { setStudentList })(StudentList)