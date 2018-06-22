import React, {Component} from 'react'
import { connect } from 'react-redux'
import './gradebook.css'


class Gradebook extends Component {

render() {
        return (
           <div id="gradebook-wrapper">
            Gradebook for classroom {this.props.classroom.name}
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
export default connect(mapStateToProps)(Gradebook)