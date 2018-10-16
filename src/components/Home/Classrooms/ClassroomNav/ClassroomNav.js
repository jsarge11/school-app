import React from 'react'
import './classroomnav.css'
import { Link } from 'react-router-dom'

export default function ClassroomNav(props) {
return (
  <nav id="classroom-nav">
   <Link to="/home"><li className="classroom-nav-item">Classrooms</li></Link>
   <Link to="/classrooms/gradebook"><li className="classroom-nav-item">Gradebook</li></Link>
   <Link to="/classrooms/courses"><li className="classroom-nav-item">Courses</li></Link>
   <Link to="/classrooms/students"><li className="classroom-nav-item">Students</li></Link>
  </nav>
 )
}