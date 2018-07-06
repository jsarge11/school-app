import React, {Component} from 'react'
import './courses.css'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios';


class Courses extends Component {

    state = {
        courses: []
    }
    componentDidMount() {
        Axios.get('/courses').then(res => {
            this.setState({ courses: res.data })
        })
    }
render() {
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
        else {
            let courses = this.state.courses.map(item => {
                return (
                    <div key={item.c_id} className="course-item-wrapper">
                        <Link to={`/classrooms/courses/assessments${item.c_id}`}>{item.name}</Link>
                    </div>
                )
            })
            return (
                <div id="course-wrapper">
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