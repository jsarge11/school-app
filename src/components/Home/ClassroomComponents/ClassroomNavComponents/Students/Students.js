import React, {Component} from 'react'
import { connect } from 'react-redux'
import StudentList from './StudentList/StudentList'
import { setStudentList } from '../../../../../ducks/reducer'
import { withRouter, Redirect } from 'react-router-dom'
import './students.css'
import axios from 'axios';

class Students extends Component {

state = {
    addStudent: false,
    first_name: '',
    last_name: '',
    username: '',
    pin: '0000',
    points: 0,
    grade: ''
}

componentDidMount() {
    axios.get('/students?id=' + this.props.classroom.id).then(res => {
        console.log(res.data);
        this.props.setStudentList(res.data);
    })
}

addStudent = () => {
    let newStudent = {};
    this.setState({ addStudent: false })

    if (!this.state.username) {
        Object.assign(newStudent, this.state, {
            username: this.state.first_name+this.state.last_name,
            id: this.props.classroom.id
        })
    }
    else {
        Object.assign(newStudent, this.state, {
            id: this.props.classroom.id
        })
    }
    //making state null
    for(let key in this.state) {
        this.setState({ [`${key}`] : '' })
    }

    axios.post('/students', newStudent).then(res => {
        this.props.setStudentList(res.data);
    })
}
handleChange = (field, e) => {
    if (field === "pin" || field === "points") {
        this.setState({ [`${field}`]: e.target.value.slice(0, 4) })
    }
    else {
        this.setState({ [`${field}`] : e.target.value })
    }
}

render() {
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div id="student-wrapper">
                {/* Students for classroom {this.props.classroom.name} */}
                <StudentList />
            </div>
            )
        }
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom } = state;
    return {
        classroom,
        classroomList
    }
}
export default withRouter(connect(mapStateToProps, { setStudentList })(Students))