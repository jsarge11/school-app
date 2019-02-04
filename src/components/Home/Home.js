import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'
import HomeNav from './HomeNav/HomeNav'
import ClassroomList from './Classrooms/ClassroomList/ClassroomList'
import axios from 'axios'
import './home.css'
import TeacherList from './TeacherList/TeacherList';
axios.defaults.withCredentials = true;

class Home extends Component {
  componentDidMount() {
    axios.get('/auth/user').then(res => {
        this.props.setUser(res.data)
    }).catch(()=>this.props.history.push('/'))
  }

render() {
   return (
     <div id="home-wrapper">
      <HomeNav />
      {this.props.user.principal ? <TeacherList /> : ''}
      <ClassroomList/>
    </div>
    )
   }
  }
  function mapStateToProps(state) {
    let { user } = state;
    return {
        user
    }
}
  export default withRouter(connect(mapStateToProps, {setUser})(Home))