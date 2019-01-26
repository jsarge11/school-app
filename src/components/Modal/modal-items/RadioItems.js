import React from 'react'

const RadioItems = props => {
 return (
  <span className="modal-radio">
  <p>Select New Employee Role: </p>
    <br/>
   <label className="input-item radio-item">
       <input id="radio1" type="radio" name="admin" onChange={(e) => props.handleChange("principal")}/>
       <p className="radio-p">Principal</p>
   </label >
   <label className="input-item radio-item">
       <input id="radio2" type="radio" name="admin" onChange={(e) => props.handleChange("admin")}/>
       <p className="radio-p">Admin</p>
   </label>
   <label className="input-item radio-item">
       <input id="radio3" type="radio" name="admin" onChange={(e) => props.handleChange("teacher")}/>
       <p className="radio-p">Teacher</p>
   </label>
   <br/>
  </span>
 )
}
export default RadioItems