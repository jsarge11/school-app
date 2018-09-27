import React, {Component} from 'react'
import { connect } from 'react-redux'
import StudentList from '../Students/StudentList/StudentList'
import { withRouter, Redirect } from 'react-router-dom'
import './gradebook.css'


class Gradebook extends Component {


render() {
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div id="gradebook-wrapper">
                <p>Classroom: {this.props.classroom.name} &nbsp; Classroom PIN: {this.props.classroom.pin}</p>
                <StudentList />
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
export default withRouter(connect(mapStateToProps)(Gradebook))