import React from 'react'

function pickRole(admin, teacher, principal) {
  console.log(admin, teacher, principal);
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
  let {admin, teacher, principal, gradesTaught, teacherName, teacherEmail } = props.teacherState;
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
  Name: {teacherName} <br/>
  Email: {teacherEmail} <br/>
  Classes Taught: <br/>
  {displayGrades}
  </div>
 )
}
export default ConfirmAddTeacher