import React from 'react'
import { Link } from 'react-router-dom'
import './homenav.css'


export default function HomeNav(props) {
    return (
       <div id="homenav-wrapper">
        <Link to="/"><li>Logo</li></Link>
        <li>Welcome, Name</li>
       </div>
    )
}