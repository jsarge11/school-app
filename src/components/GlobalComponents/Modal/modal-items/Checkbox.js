import React from 'react'

function isTaught(grade, gradesTaught) {
 if (gradesTaught.includes(grade)) {
  return true;
 }
 else {
  return false;
 }
}
const Checkbox = props => {
 let { gradesTaught } = props.teacherState;
 let { grade } = props;
return (
 <label className="input-item checkbox-item" onChange={(e) => props.handleCheckbox(e)}>
  <input checked={isTaught(grade, gradesTaught)} type="checkbox" value={props.grade} />
  <p className="checkbox-p">{props.grade}</p>
 </label>  
 )
}
export default Checkbox