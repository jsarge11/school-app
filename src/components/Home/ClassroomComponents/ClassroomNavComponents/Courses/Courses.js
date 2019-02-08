import React, {Component} from 'react'
import './courses.css'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';


class Courses extends Component {
    state = {
        courses: []
    }
    componentDidMount() {
        axios.get('/courses').then(res => {
            this.setState({ courses: res.data })
        })
    }
render() {
    console.log(this.props);
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
        else {
            let courses = this.state.courses.map(item => {
                return (
                    <div key={item.id} className="course-item-wrapper">
                        <p>{item.name}</p>
                    </div>
                )
            })
            return (
                <div id="course-wrapper">
                <h1>Courses</h1>
                {courses}
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom} = state;
    return {
        classroom,
        classroomList
    }
}
export default withRouter(connect(mapStateToProps)(Courses))