import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../ducks/reducer'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios';
import ListItem from '../../../../GlobalComponents/ListItem/ListItem';
import StudentInformationalComponent from '../../../../GlobalComponents/ListItem/InformationalComponents/StudentInformationalComponent';

class StudentList extends Component {

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

deleteStudent = (id, c_id) => {
    axios.delete(`/students?id=${id}&c_id=${c_id}`).then(res => {
      this.props.setStudentList(res.data[0]);
    }).catch(error => console.log(error))
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
        let students = this.props.studentList.map(item => {
            return (
             <ListItem 
                key={item.id}
                item={item}
                handleChange={this.handleChange}
                deleteFn={this.deleteStudent}
                InformationalComponent={<StudentInformationalComponent item={item}/>}
             
             />
            )
           })
            return (
            <div>
                <h1>Student List</h1>
                {students}
            </div>
            )
        }
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom, studentList } = state;
    return {
        classroom,
        classroomList,
        studentList
    }
}
export default withRouter(connect(mapStateToProps, { setStudentList })(StudentList))