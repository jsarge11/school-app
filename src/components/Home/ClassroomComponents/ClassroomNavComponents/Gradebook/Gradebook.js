import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import './gradebook.css'
import StudentGrades from './StudentGrades/StudentGrades';


class Gradebook extends Component {

state = {
    pinEdit: false
}

toggleEdit = () => {
    this.setState({ pinEdit: !this.state.pinEdit})
}
render() {
    console.log(this.props)
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div id="gradebook-wrapper">
                <h1>Gradebook</h1>
                <h2>Classroom: {this.props.classroom.name} &nbsp; Classroom PIN: {this.props.classroom.pin}
                </h2>
                    <StudentGrades />
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
