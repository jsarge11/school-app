import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import './homenav.css'
import { logOut } from '../../../ducks/reducer'
import { connect } from 'react-redux'


function HomeNav(props) {
    return (
       <div id="homenav-wrapper">
        <Link to="/"><li>Logo</li></Link>
        <div>
            <li id="logout-button" onClick={() => {
                axios.get('/auth/logout').then(() => {
                    props.history.push('/');
                    props.logOut();
                });
            }}>Logout</li>
            <li>Welcome, {props.user.first_name} </li>
        </div>
       </div>
    )
}
export default withRouter(connect(null, {logOut})(HomeNav))