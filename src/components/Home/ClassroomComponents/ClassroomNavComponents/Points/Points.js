import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import './points.css'


class Points extends Component {
render() {
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div id="points-wrapper">
                {/* Points for classroom {this.props.classroom.name} */}
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
export default withRouter(connect(mapStateToProps)(Points))