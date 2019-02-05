import React from 'react'

const StudentInformationalComponent = props => {
  let { item } = props;
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
    </span>
  </section>
  )
}
export default StudentInformationalComponent