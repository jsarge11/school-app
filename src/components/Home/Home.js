import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'
import HomeNav from './HomeNav/HomeNav'
import ClassroomList from './Classrooms/ClassroomList/ClassroomList'
import axios from 'axios'
import './home.css'
import Teachers from './Teachers/Teachers';
axios.defaults.withCredentials = true;

class Home extends Component {
  componentDidMount() {
    axios.get('http://localhost:4000/auth/user').then(res => {
        this.props.setUser(res.data)
    }).catch(()=>this.props.history.push('/'))
  }

render() {
   return (
     <div id="home-wrapper">
      <HomeNav />
      <ClassroomList/>
      {this.props.user.principle ? <Teachers /> : ''}
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