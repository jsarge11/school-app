import React from 'react'
import './studentlist.css'
import { setClassroom } from '../../../ducks/reducer'
import { connect } from 'react-redux'

const ClassroomInformationComponent = props => {
  let { item } = props;
  let { assessments } = item;
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
        <strong>Username: &nbsp; </strong>
        <em>{item.username} </em>
      </p> 
    </span>
  </section>
 )
}
export default connect(null, { setClassroom })(ClassroomInformationComponent)