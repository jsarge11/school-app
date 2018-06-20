import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import './home.css'


export default class Home extends Component {
state = {

}

render() {
   return (
     <div id="home-wrapper">
      <HomeNav/>
      <Link to="/classrooms/gradebook">Classrooms</Link>
     </div>
    )
   }
  }