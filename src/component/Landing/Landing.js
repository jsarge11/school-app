import React, { Component } from 'react'
import LandingNav from './LandingNav/LandingNav'
import './landing.css'

export default class Landing extends Component {
state = {

}

render() {
   return (
     <div id="landing-wrapper">
      <LandingNav />
     </div>
    )
   }
  }