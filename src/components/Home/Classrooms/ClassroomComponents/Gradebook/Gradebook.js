import React, {Component} from 'react'
import { connect } from 'react-redux'
import StudentList from '../Students/StudentList/StudentList'
import './gradebook.css'


class Gradebook extends Component {


render() {
        return (
           <div id="gradebook-wrapper">
            Classroom: {this.props.classroom.name}
            <StudentList />
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