import React from 'react'

const TeacherInput = props => {
 let {name, email} = props.teacherState;
 return (
  <div className="modal-body-wrapper">
  <p>Enter New Employee Name:</p>
   <input type="text"
    placeholder="Name"
    className="user-input"
    value={name} 
    onChange={(e) => props.handleChange("name", e.target.value)} />
   <span className="alert" id="alert_name"></span>
   <input type="text"
    placeholder="Email"
    className="user-input"
    value={email} 
    onChange={(e) => props.handleChange("email", e.target.value)} />
   <span className="alert" id="alert_pin"></span>
  </div>
 )
}
export default TeacherInput