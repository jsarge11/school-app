import React from 'react'
import { formatUsername } from '../../../../assets/fns/functions'

const ConfirmAddStudent = props => {
  let {name, username, pin, points, grade, mathAssessments } = props.studentState;
  let displayAssessments = mathAssessments.map(item => {
    return <span key={item}>{`${item} `}</span>
  })
  if (!displayAssessments.length) {
    displayAssessments = <span> None </span>;
  }
return (
  <div> 
  Confirm Details: <br/>
  Name: {name} <br/>
  Username: {username || formatUsername(name)} <br/>
  Pin: {pin} <br/>
  Grade: {grade} <br/>
  Points: {points} <br/>
  Assigned Assessments: <br/>
  {displayAssessments}
  </div>
 )
}
export default ConfirmAddStudent