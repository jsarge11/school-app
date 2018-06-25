import React, { Component } from 'react'
import ClassRoutes from './ClassRoutes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setStudentList } from '../../../ducks/reducer'
import axios from 'axios'
import './classrooms.css'

class Classrooms extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    console.log('here');

    axios.get('/auth/teacher').then(res => {
      this.setState({ user: res.data})
    }).catch(() => this.props.history.push('/'))

    axios.get('/students?id=' + this.props.classroom.clsr_id).then(res => { 
        this.props.setStudentList(res.data);
    })
  }
   render() {

      return (
      <div id="classroom-wrapper">
        <ClassRoutes user={this.state.user}/>
      </div>
      )
    }
  }
  function mapStateToProps(state) {
    let { classroom } = state;

    return {
      classroom,
    }
  }
  export default withRouter(connect(mapStateToProps, { setStudentList })(Classrooms))