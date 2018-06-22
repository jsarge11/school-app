import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import ClassroomList from './ClassroomList/ClassroomList'
import axios from 'axios'
import './home.css'


class Home extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    axios.get('/auth/teacher').then(res => {
        this.setState({ user: res.data })
    }).catch(()=>this.props.history.push('/'))
  }
render() {
  console.log(this.state.user)
   return (
     <div id="home-wrapper">
      <HomeNav user={this.state.user} />
      <ClassroomList user={this.state.user} />
    </div>
    )
   }
  }
  export default withRouter(Home)