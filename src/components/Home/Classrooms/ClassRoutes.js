import React from 'react'
import HomeNav from '../HomeNav/HomeNav'
import ClassroomNav from './ClassroomNav/ClassroomNav'
import Gradebook from './ClassroomComponents/Gradebook/Gradebook'
import Points from './ClassroomComponents/Points/Points'
import Students from './ClassroomComponents/Students/Students'
import { Switch, Route } from 'react-router-dom'
import Courses from './ClassroomComponents/Courses/Courses';


function ClassRoutes(props) {
  return (
  <div id="classroom-wrapper">
      <HomeNav />
      <ClassroomNav />
        <Switch>
          <Route exact path="/classrooms/gradebook" component={Gradebook}/>
          <Route path="/classrooms/points" component={Points}/>
          <Route exact path="/classrooms/courses" component={Courses}/>
          <Route path="/classrooms/students" component={Students}/>
        </Switch>
    </div>
)
}

export default ClassRoutes