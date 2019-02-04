import React from 'react'
import HomeNav from '../HomeNav/HomeNav'
import ClassroomNav from './ClassroomNavComponents/ClassroomNav'
import Gradebook from './ClassroomNavComponents/Gradebook/Gradebook'
import Points from './ClassroomNavComponents/Points/Points'
import Students from './ClassroomNavComponents/Students/Students'
import { Switch, Route } from 'react-router-dom'
import Courses from './ClassroomNavComponents/Courses/Courses';


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