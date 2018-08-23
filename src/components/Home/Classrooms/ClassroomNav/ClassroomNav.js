import React from 'react'
import './classroomnav.css'
import { Link } from 'react-router-dom'

export default function ClassroomNav(props) {
return (
  <nav id="classroom-nav">
   <Link to="/classrooms/gradebook"><li>Gradebook</li></Link>
   {/* <Link to="/classrooms/points"><li>Points</li></Link> */}
   <Link to="/classrooms/courses"><li>Courses</li></Link>
   <Link to="/classrooms/students"><li>Students</li></Link>
  </nav>
 )
}