import React from 'react'
import { formatUsername } from '../../../../assets/fns/functions'

const StudentInput = props => {
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
    placeholder={formatUsername(name) || "Username"}
    className="user-input"
    value={username} 
    onChange={(e) => props.handleChange("username", e)} />
    
   <input type="text"
    placeholder="PIN"
    className="user-input"
    value={pin} 
    onChange={(e) => props.handleChange("pin", e)} />

   <input type="text"
    placeholder="Grade"
    className="user-input"
    value={grade} 
    onChange={(e) => props.handleChange("grade", e)} />

  </div>
 )
}
export default StudentInput