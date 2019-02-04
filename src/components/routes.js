import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing/Landing'
import Home from './Home/Home'
import Classrooms from './Home/ClassroomComponents/Classrooms'
import './routes.css'

export default (
 <div className="route-wrapper">
   <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path="/home" component={Home}/>
    <Route path="/classrooms" component={Classrooms}/>
   </Switch>
 </div>
)