import React from 'react'


const ConfirmAddTeacher = props => {
  let {gradesTaught, teacherName, teacherEmail } = props.teacherState;
  let displayGrades = gradesTaught.map(item => {
    return <span>{`${item} `}</span>
  })
return (
  <div> 
  Is this correct? <br/>
  Teacher Information <br/>
  Name: {teacherName} <br/>
  Email: {teacherEmail} <br/>
  Classes Taught: <br/>
  {displayGrades}
  </div>
 )
}
export default ConfirmAddTeacher