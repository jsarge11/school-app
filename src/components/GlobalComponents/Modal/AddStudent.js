import React from 'react'
import StudentInput from './modal-items/StudentInput';
import CheckboxList from './modal-items/CheckboxList';
import ConfirmAddStudent from './modal-items/ConfirmAddStudent';

function componentSwitch(activeCrumb, handleChange, studentState, handleCheckbox, items) {
  let description = "Choose what assessments the student can access";
 switch(activeCrumb) {
  case 0:
   return <StudentInput handleChange={handleChange} studentState={studentState}/>
  case 1:
   return <CheckboxList handleCheckbox={handleCheckbox} items={items} objectState={studentState} description={description} listType="assessment"/>
  case 2:
    return <ConfirmAddStudent studentState={studentState}/>
  default:
   return (<div>
    Nothing to see here.
   </div>)
 }
}
const AddStudent = props => {
 let { handleChange, activeCrumb, studentState, handleCheckbox, items } = props;
 let display = componentSwitch(activeCrumb, handleChange, studentState, handleCheckbox, items);
 return (
   <div>
     {display}
   </div>
 )
}
export default AddStudent