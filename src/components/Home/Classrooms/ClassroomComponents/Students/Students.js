import React, {Component} from 'react'
import { connect } from 'react-redux'
import AddStudent from './AddStudent/AddStudent'
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
    axios.get('https://sargentassociates.com:4000/students?id=' + this.props.classroom.clsr_id).then(res => {
        this.props.setStudentList(res.data);
    })
}

addStudent = () => {
    let newStudent = {};
    this.setState({ addStudent: false })

    if (!this.state.username) {
        Object.assign(newStudent, this.state, {
            username: this.state.first_name+this.state.last_name,
            clsr_id: this.props.classroom.clsr_id
        })
    }
    else {
        Object.assign(newStudent, this.state, {
            clsr_id: this.props.classroom.clsr_id
        })
    }
    //making state null
    for(let key in this.state) {
        this.setState({ [`${key}`] : '' })
    }

    axios.post('https://sargentassociates.com:4000/students', newStudent).then(res => {
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
                {this.state.addStudent ?
                    <AddStudent
                        addStudent={this.addStudent}
                        handleChange={this.handleChange}
                        first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        username={this.state.username}
                        pin={this.state.pin}
                        points={this.state.points}
                    />
                :
                <button onClick={()=>this.setState({ addStudent: true })}>Add Student</button>}
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