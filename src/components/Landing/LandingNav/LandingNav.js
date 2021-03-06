import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login/Login'
import './landingnav.css'

export default class LandingNav extends Component {
state = {
 teacherLogin: true
}

render() {
  let idName = this.state.teacherLogin ? 'login-open' : 'login-closed';

   return (
     <div id="landingnav-wrapper">
      <Link to="/"><li id="logo-text"> Fluency Masters </li></Link>
      {/* <li id="teacher-login-button" onClick={()=>this.setState({ teacherLogin: !this.state.teacherLogin })}> Teacher Login </li> */}
      <Login className="login" idName={idName} />
     </div>
    )
   }
  }