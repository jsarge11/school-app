import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import ClassroomList from './Classrooms/ClassroomList/ClassroomList'
import axios from 'axios'
import './home.css'
import Teachers from './Teachers/Teachers';


class Home extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    axios.get('/auth/user').then(res => {
        this.setState({ user: res.data })
    }).catch(()=>this.props.history.push('/'))
  }
render() {
   return (
     <div id="home-wrapper">
      <HomeNav user={this.state.user} />
      <ClassroomList user={this.state.user} />
      {this.state.user.principle ? <Teachers user={this.state.user}/> : ''}
    </div>
    )
   }
  }
  export default withRouter(Home)