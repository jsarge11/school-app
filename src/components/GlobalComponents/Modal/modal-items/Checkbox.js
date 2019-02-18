import React from 'react'

function isTaught(item, checkedList) {
 if (checkedList.includes(item)) {
  return true;
 }
 else {
  return false;
 }
}
const Checkbox = props => {
 let { gradesTaught, mathAssessments } = props.objectState;
 let { listType } = props;
 let checkedList = gradesTaught || mathAssessments;
 let { item, handleCheckbox } = props;
return (
 <label className={`input-item checkbox-item-${listType}`} onChange={(e) => handleCheckbox(e)}>
  <input checked={isTaught(item, checkedList)} type="checkbox" value={item} />
  <p className="checkbox-p">{item}</p>
 </label>
 )
}
export default Checkbox