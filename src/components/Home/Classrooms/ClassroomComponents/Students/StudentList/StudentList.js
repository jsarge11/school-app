import React, { Component } from 'react'
import { connect } from 'react-redux'
import './studentlist.css'
import Scores from './Scores/Scores';
import StudentCourses from './StudentCourses/StudentCourses';
import axios from 'axios'

class StudentList extends Component {

state = {
  assessmentValue: 1
}
handleChange = (e) => {
  this.setState({ assessmentValue: e.target.value })
}
handleClick = (id) => {
  let { assessmentValue } = this.state;
  axios.post('/math/assessments?id=' + id, {assessmentValue: assessmentValue}).then(res => {
    console.log(res);
  })
}
render() {
  let students = this.props.studentList.map(student => {
    return (
     <div key={student.st_id} className="student-list-item">
      {student.first_name}&nbsp;
      {student.last_name}&nbsp;
      {student.pin}&nbsp;
      {student.points}&nbsp;
      {student.grade}
      <StudentCourses courses={student.assessments} />
      <select onChange={this.handleChange} name="assessments" id="assessments">
        <option value={1}>Multiplication</option>
        <option value={2}>Division</option>
        <option value={3}>Addition</option>
        <option value={4}>Subtraction</option>
      </select>
      <button onClick={() => this.handleClick(student.st_id)}>Add Assessment</button>
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