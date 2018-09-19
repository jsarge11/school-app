import React, { Component } from 'react'
import { connect } from 'react-redux'
import './studentlist.css'
import Scores from './Scores/Scores';
import StudentAssessments from './StudentCourses/StudentAssessments';

class StudentList extends Component {

state = {
  assessmentValue: 1
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
export default connect(mapStateToProps)(StudentList)