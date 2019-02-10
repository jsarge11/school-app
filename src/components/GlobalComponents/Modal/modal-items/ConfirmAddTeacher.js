import React from 'react'

function pickRole(admin, teacher, principle) {
  if (admin) {
    return <span>Admin</span>
  }
  else if (teacher) {
    return <span>Teacher</span>
  }
  else if (principle) {
    return <span>Principle</span>
  }
}

const ConfirmAddTeacher = props => {
  let {admin, teacher, principle, gradesTaught, name, email } = props.teacherState;
  let displayGrades = gradesTaught.map(item => {
    return <span key={item}>{`${item} `}</span>
  })
  if (!displayGrades.length) {
    displayGrades = <span>None</span>;
  }
return (
  <div> 
  Confirm Details: <br/>
  Role: {pickRole(admin, teacher, principle)} <br/>
  Name: {name} <br/>
  Email: {email} <br/>
  Classes Taught: <br/>
  {displayGrades}
  </div>
 )
}
export default ConfirmAddTeacher