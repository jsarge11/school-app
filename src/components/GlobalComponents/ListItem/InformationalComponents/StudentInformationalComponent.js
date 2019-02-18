import React from 'react'
import { toAssessmentWords } from '../../../../assets/fns/functions'

const StudentInformationalComponent = props => {
  let { item } = props;
  let words = toAssessmentWords(item.assessments);
  let assessments = words.map(item => {
    return <span>{item}</span>
  })
  return (
    <section className="item-name-text-wrapper">
    <span className="student-text-wrapper">
      <p className="student-info-text-wrapper"> 
        <strong>Student Name: &nbsp;</strong> 
        <em>{item.name}</em>
      </p>
      <p className="student-info-text-wrapper"> 
        <strong>PIN: &nbsp; </strong>
        <em>{item.pin} </em>
      </p> 
      <p className="student-info-text-wrapper"> 
        <strong>Grade: &nbsp; </strong>
        <em>{item.grade} </em>
      </p> 
      <p className="student-info-text-wrapper"> 
        <strong>Assessments: &nbsp; </strong>
        <em>{assessments} </em>
      </p> 
    </span>
  </section>
  )
}
export default StudentInformationalComponent