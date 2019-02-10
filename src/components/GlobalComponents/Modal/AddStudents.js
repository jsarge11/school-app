import React from 'react'
import StudentInput from './modal-items/StudentInput';

function componentSwitch(activeCrumb, handleChange, studentState) {
 switch(activeCrumb) {
  case 0:
   return <StudentInput handleChange={handleChange} studentState={studentState}/>
  case 1:
   return 'sdfg'
  default:
   return (<div>
    Nothing to see here. 
   </div>)
 }
}
const AddStudent = props => {
  console.log(props);
 let { handleChange, activeCrumb, studentState } = props;
 let display = componentSwitch(activeCrumb, handleChange, studentState);
 return (
   <div>
     {display}
   </div>
 )
}
export default AddStudent