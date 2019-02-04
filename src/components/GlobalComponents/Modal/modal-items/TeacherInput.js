import React from 'react'

const TeacherInput = props => {
 let {teacherName, teacherEmail} = props.teacherState;
 return (
  <div className="modal-body-wrapper">
  <p>Enter New Employee Name:</p>
   <input type="text"
    placeholder="Name"
    className="user-input"
    value={teacherName} 
    onChange={(e) => props.handleChange("teacherName", e.target.value)} />
   <span className="alert" id="alert_name"></span>
   <input type="text"
    placeholder="Email"
    className="user-input"
    value={teacherEmail} 
    onChange={(e) => props.handleChange("teacherEmail", e.target.value)} />
   <span className="alert" id="alert_pin"></span>
  </div>
 )
}
export default TeacherInput