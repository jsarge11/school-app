import React from 'react'
import './classroomnav.css'
import { Link } from 'react-router-dom'

export default function ClassroomNav(props) {
return (
  <nav id="classroom-nav">
   <Link to="/home"><button className="item-button"> Home </button></Link>
   <Link to="/classrooms/gradebook"><li className="item-button">Gradebook</li></Link>
   {/* <Link to="/classrooms/courses"><li className="item-button">Courses</li></Link> */}
   <Link to="/classrooms/students"><li className="item-button">Students</li></Link>
  </nav>
 )
}