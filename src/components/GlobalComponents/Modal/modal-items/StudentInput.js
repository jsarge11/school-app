import React from 'react'

const StudentInput = props => {
 let {name, username, pin, grade} = props.studentState;
 return (
  <div className="modal-body-wrapper">
  <p>Enter New Student Name:</p>
   <input type="text"
    placeholder="Name"
    className="user-input"
    value={name} 
    onChange={(e) => props.handleChange("studentName", e.target.value)} />

   <input type="text"
    placeholder="Username"
    className="user-input"
    value={username} 
    onChange={(e) => props.handleChange("username", e.target.value)} />

  <p>Enter New Employee Name:</p>
   <input type="text"
    placeholder="PIN"
    className="user-input"
    value={pin} 
    onChange={(e) => props.handleChange("studentPin", e.target.value)} />

   <input type="text"
    placeholder="Email"
    className="user-input"
    value={grade} 
    onChange={(e) => props.handleChange("studentGrade", e.target.value)} />

  </div>
 )
}
export default StudentInput