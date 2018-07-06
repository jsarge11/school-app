import React from 'react'
import { connect } from 'react-redux'
import './studentlist.css'


function StudentList(props) {
 let students = props.studentList.map(student => {
  return (
   <div key={student.st_id} className="student-list-item">
    {student.first_name}&nbsp;
    {student.last_name}&nbsp;
    {student.pin}&nbsp;
    {student.points}&nbsp;
    {student.grade}
   </div>
  )
 })

 return (
   <div id="student-list-wrapper">
    {students}
   </div>
  )
}
function mapStateToProps(state) {
 let { studentList } = state;
 return {
  studentList,
 }
}
export default connect(mapStateToProps)(StudentList)