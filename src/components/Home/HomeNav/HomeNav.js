import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import './homenav.css'


function HomeNav(props) {
    // if (!props.user) {
    //     props.history.push('/');
    // }
    return (
       <div id="homenav-wrapper">
        <Link to="/"><li>Logo</li></Link>
        <div>
            <li id="logout-button" onClick={() => {
                axios.get('/auth/logout').then(res => {
                    props.history.push('/');
                });
            }}>Logout</li>
            <li>Welcome, {props.user.first_name} </li>
        </div>
       </div>
    )
}
export default withRouter(HomeNav)