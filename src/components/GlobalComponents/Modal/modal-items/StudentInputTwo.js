import React from 'react'

const StudentInputTwo = props => {
 let {name, username, pin, grade} = props.studentState;
 return (
  <div className="modal-body-wrapper">
  <p>Enter New Student Information:</p>
   <input type="text"
    placeholder="Name"
    className="user-input"
    value={name} 
    onChange={(e) => props.handleChange("name", e)} />

   <input type="text"
    placeholder="Username"
    className="user-input"
    value={username} 
    onChange={(e) => props.handleChange("username", e)} />
    
   <input type="text"
    placeholder="PIN"
    className="user-input"
    value={pin} 
    onChange={(e) => props.handleChange("pin", e)} />

   <input type="text"
    placeholder="Email"
    className="user-input"
    value={grade} 
    onChange={(e) => props.handleChange("grade", e)} />

  </div>
 )
}
export default StudentInputTwo