import React, {Component} from 'react'
import { connect } from 'react-redux'
import './assessment.css'


class Assessments extends Component {
render() {
        return (
        <div id="assessment-wrapper">
            Assessments for classroom {this.props.classroom.name}
        </div>
        )
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom} = state;
    return {
        classroom,
        classroomList
    }
}
export default connect(mapStateToProps)(Assessments)