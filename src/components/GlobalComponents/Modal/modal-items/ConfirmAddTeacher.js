import React from 'react'

function pickRole(admin, teacher, principal) {
  if (admin) {
    return <span>Admin</span>
  }
  else if (teacher) {
    return <span>Teacher</span>
  }
  else if (principal) {
    return <span>Principal</span>
  }
}

const ConfirmAddTeacher = props => {
  console.log(props);
  let {admin, teacher, principal, gradesTaught, name, email } = props.teacherState;
  let displayGrades = gradesTaught.map(item => {
    return <span key={item}>{`${item} `}</span>
  })
  if (!displayGrades.length) {
    displayGrades = <span>None</span>;
  }
return (
  <div> 
  Confirm Details: <br/>
  Role: {pickRole(admin, teacher, principal)} <br/>
  Name: {name} <br/>
  Email: {email} <br/>
  Classes Taught: <br/>
  {displayGrades}
  </div>
 )
}
export default ConfirmAddTeacher