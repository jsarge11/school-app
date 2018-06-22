import React from 'react'
import HomeNav from '../HomeNav/HomeNav'
import ClassroomNav from './ClassroomNav/ClassroomNav'
import Assessments from './ClassroomComponents/Assessments/Assessments'
import Gradebook from './ClassroomComponents/Gradebook/Gradebook'
import Points from './ClassroomComponents/Points/Points'
import Students from './ClassroomComponents/Students/Students'
import { Switch, Route } from 'react-router-dom'


export default function ClassRoutes(props) {
  
  return (  
  <div id="classroom-wrapper">
      <HomeNav user={props.user}/>
      <ClassroomNav />
        <Switch>
          <Route exact path="/classrooms/gradebook" component={Gradebook}/>
          <Route path="/classrooms/points" component={Points}/>
          <Route path="/classrooms/assessments" component={Assessments}/>
          <Route path="/classrooms/students" component={Students}/>
        </Switch>
    </div>
)
}