import React from 'react'

const TeacherInput = props => {
 return (
  <div class="modal-body-wrapper">
  <p>Enter New Employee Name:</p>
   <input type="text"
    placeholder="Name"
    className="user-input"
    onChange={(e) => props.handleChange("Teacher Name", e.target.value)} />
   <span className="alert" id="alert_name"></span>
   <input type="text"
    placeholder="Email"
    className="user-input"
    onChange={(e) => props.handleChange("Email", e.target.value)} />
   <span className="alert" id="alert_pin"></span>
  </div>
 )
}
export default TeacherInput