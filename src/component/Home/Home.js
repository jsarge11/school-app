import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import axios from 'axios'
import './home.css'


class Home extends Component {
state = {
  user: ''
}
componentDidMount() {
  axios.get('/auth/teacher').then(res => {
    this.setState({ user: res.data })
  }).catch(()=>this.props.history.push('/'))
}

render() {

   return (
     <div id="home-wrapper">
      <HomeNav />
      <Link to="/classrooms/gradebook">Classrooms</Link>
     </div>
    )
   }
  }
  export default withRouter(Home)