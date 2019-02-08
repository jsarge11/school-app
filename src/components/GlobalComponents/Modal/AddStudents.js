import React from 'react'
import StudentInput from './modal-items/StudentInput';

function componentSwitch(activeCrumb, handleChange, handleCheckbox, studentObj) {
 switch(activeCrumb) {
  case 0:
   return <StudentInput handleChange={handleChange} studentObj={studentObj}/>
  case 1:
   return 'sdfg'
  case 2:
   return 'sdfg'
  case 3: 
   return 'sdfg'
  default:
   return (<div>
    Nothing to see here. 
   </div>)
 }
}
const AddStudent = props => {
 let { handleChange, activeCrumb, handleCheckbox, studentObj } = props;
 let display = componentSwitch(activeCrumb, handleChange, handleCheckbox, studentObj);
 return (
   <div>
     {display}
   </div>
 )
}
export default AddStudent