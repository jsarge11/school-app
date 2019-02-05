import React from 'react'
import { Link } from 'react-router-dom'
import { setClassroom } from '../../../../ducks/reducer'
import { connect } from 'react-redux'

const ClassroomInformationalComponent = props => {
 return (
  <section className="item-name-text-wrapper">
   <p> Classroom Name: </p> &nbsp;
   <Link onClick={() => props.setClassroom(props.item)} to={`/classrooms/gradebook`}>
    <span className="classroom-name">{props.item.name}</span>
   </Link>
  </section>
 )
}
export default connect(null, { setClassroom })(ClassroomInformationalComponent)