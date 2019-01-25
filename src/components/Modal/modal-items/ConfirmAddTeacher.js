import React from 'react'


const ConfirmAddTeacher = props => {

 let classesTaught = props.classes;
return (
  <div> 
  Is this correct?
  Teacher Information
  {props.name}
  {props.email}
  Classes Taught:
  {classesTaught}
  </div>
 )
}
export default ConfirmAddTeacher