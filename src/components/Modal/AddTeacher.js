import React from 'react'
import RadioItems from './modal-items/RadioItems'
import CheckboxList from './modal-items/CheckboxList';
import ConfirmAddTeacher from './modal-items/ConfirmAddTeacher';
import TeacherInput from './modal-items/TeacherInput';

function componentSwitch(activeCrumb, handleChange) {
 switch(activeCrumb) {
  case 0:
   return <TeacherInput />
  case 1:
   return <RadioItems handleChange={handleChange}/>
  case 2:
   return <CheckboxList />
  case 3: 
   return <ConfirmAddTeacher />
  default:
   return (<div>
    Nothing to see here. 
   </div>)
 }
}
const AddTeacher = props => {
 let { handleChange, activeCrumb } = props;
 let display = componentSwitch(activeCrumb, handleChange);
 return (
   <div>
     {display}
   </div>
 )
}
export default AddTeacher