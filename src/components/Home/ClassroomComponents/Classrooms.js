import React, { Component } from 'react'
import ClassRoutes from './ClassRoutes'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setStudentList, setUser } from '../../../ducks/reducer'
import axios from 'axios'
import './classrooms.css'

class Classrooms extends Component {
  componentDidMount() {
    if (this.props.classroom) {
      axios.get('/auth/user').then(res => {
        this.props.setUser(res.data);
      }).catch(() => this.props.history.push('/'))
      axios.get('/students?id=' + this.props.classroom.id).then(res => {
          this.props.setStudentList(res.data);
      })
    }
  }
   render() {
    if (!this.props.classroom) {
      return <Redirect push to="/home" />
    }
    else {
        return (
        <div id="classroom-wrapper">
          <ClassRoutes />
        </div>
        )
      }
    }
  }
  function mapStateToProps(state) {
    let { classroom } = state;
    return {
      classroom,
    }
  }
  
  export default withRouter(connect(mapStateToProps, { setStudentList, setUser })(Classrooms))