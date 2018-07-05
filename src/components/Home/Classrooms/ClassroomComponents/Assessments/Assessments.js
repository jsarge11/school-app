import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import './assessment.css'
import Assessment from './Assessment/Assessment'


class Assessments extends Component {
render() {
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div id="assessment-wrapper">
                 <Assessment first_number={12} second_number={3} operator={'-'} />
                 <Assessment first_number={11} second_number={11} operator={'+'} />
                 <Assessment first_number={12} second_number={12} operator={'*'} />
                 <Assessment first_number={121} second_number={10} operator={'/'} />
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
export default withRouter(connect(mapStateToProps)(Assessments))