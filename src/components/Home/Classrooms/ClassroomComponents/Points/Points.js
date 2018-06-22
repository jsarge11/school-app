import React, {Component} from 'react'
import { connect } from 'react-redux'
import './points.css'


class Points extends Component {
render() {
        return (
           <div id="points-wrapper">
            {/* Points for classroom {this.props.classroom.name} */}
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
export default connect(mapStateToProps)(Points)