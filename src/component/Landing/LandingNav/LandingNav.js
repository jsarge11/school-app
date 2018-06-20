import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landingnav.css'

export default class LandingNav extends Component {
state = {

}

render() {
   return (
     <div id="landingnav-wrapper">

      <Link to="/"><li> Logo </li></Link>
      <Link to="/home"><li> Teacher Login </li></Link>

     </div>
    )
   }
  }