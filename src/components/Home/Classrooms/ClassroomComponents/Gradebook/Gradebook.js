import React, {Component} from 'react'
import { connect } from 'react-redux'
import StudentList from '../Students/StudentList/StudentList'
import { withRouter, Redirect } from 'react-router-dom'
import './gradebook.css'
import EditModal from '../../../EditModal/EditModal';


class Gradebook extends Component {

state = {
    pinEdit: false
}

render() {
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div id="gradebook-wrapper">
                <EditModal />
                <p>Classroom: {this.props.classroom.name} &nbsp; Classroom PIN: {this.props.classroom.pin}<span id="pin-edit">&#9998;</span></p>
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
