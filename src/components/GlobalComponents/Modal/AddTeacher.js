import React from 'react'
import RadioItems from './modal-items/RadioItems'
import CheckboxList from './modal-items/CheckboxList';
import ConfirmAddTeacher from './modal-items/ConfirmAddTeacher';
import TeacherInput from './modal-items/TeacherInput';

function componentSwitch(activeCrumb, handleChange, handleCheckbox, teacherState, items) {
  let description = "Please select grades taught (if any)"
 switch(activeCrumb) {
  case 0:
   return <TeacherInput handleChange={handleChange} teacherState={teacherState} />
  case 1:
   return <RadioItems handleChange={handleChange} teacherState={teacherState} />
  case 2:
   return <CheckboxList handleCheckbox={handleCheckbox} items={items} objectState={teacherState} description={description} listType="grade"/>
  case 3:
   return <ConfirmAddTeacher teacherState={teacherState} />
  default:
   return (<div>
    Nothing to see here.
   </div>)
 }
}
const AddTeacher = props => {
 let { handleChange, activeCrumb, handleCheckbox, teacherState, items } = props;
 let display = componentSwitch(activeCrumb, handleChange, handleCheckbox, teacherState, items);
 return (
   <div>
     {display}
   </div>
 )
}
export default AddTeacher