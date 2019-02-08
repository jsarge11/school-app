import React from 'react'

const AddClassroom = props => {
 return (
  <div className="modal-body-wrapper">
   <input type="text"
    placeholder="Name"
    className="user-input"
    onChange={(e) => props.handleChange("classroomName", e)} />
   <span className="alert" id="alert_name"></span>
   <input type="number"
    placeholder="PIN"
    className="user-input"
    onChange={(e) => props.handleChange("pin", e)} />
   <span className="alert" id="alert_pin"></span>
  </div>
 )
}
export default AddClassroom