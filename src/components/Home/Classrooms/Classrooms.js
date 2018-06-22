import React, { Component } from 'react'
import ClassRoutes from './ClassRoutes'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './classrooms.css'

class Classrooms extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    axios.get('/auth/teacher').then(res => {
      this.setState({ user: res.data})
    }).catch(() => this.props.history.push('/'))
  }
   render() {

      return (
      <div id="classroom-wrapper">
        <ClassRoutes user={this.state.user}/>
      </div>
      )
    }
  }
  export default withRouter(Classrooms)