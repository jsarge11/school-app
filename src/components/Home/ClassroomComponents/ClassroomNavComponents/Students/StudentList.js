import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../ducks/reducer'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios';
import ListItem from '../../../../GlobalComponents/ListItem/ListItem';
import StudentInformationalComponent from '../../../../GlobalComponents/ListItem/InformationalComponents/StudentInformationalComponent';
import Modal from '../../../../GlobalComponents/Modal/Modal';
import { toDBString } from '../../../../../assets/fns/functions'

let initialState = {
    modalToggle: false,
    name: '',
    username: '',
    pin: '',
    points: 0,
    grade: '',
    mathAssessments: [],
    confirmDelete: false
}
class StudentList extends Component {

state = initialState;

componentDidMount() {
    axios.get('/students?id=' + this.props.classroom.id).then(res => {
        this.props.setStudentList(res.data);
    })
}
toggleModal = () => {
    this.setState({ modalToggle: !this.state.modalToggle, })
}
resetState = () => {
    this.setState(initialState);
}
addStudent = () => {
    let newStudent = {};
    this.setState({ addStudent: false })
    console.log(this.state.mathAssessments)
    let assessmentString = toDBString(this.state.mathAssessments);

    if (!this.state.username) {
        Object.assign(newStudent, this.state, {
            username: this.state.name,
            classroom_id: this.props.classroom.id
        })
    }
    else {
        Object.assign(newStudent, this.state, {
            classroom_id: this.props.classroom.id
        })
    }

    newStudent = {...newStudent, mathAssessments: assessmentString};

    //making state null
    for(let key in this.state) {
        this.setState({ [`${key}`] : '' })
    }

    axios.post('/students', newStudent).then(res => {
        this.props.setStudentList(res.data);
    })
}

// confirmDelete() {
//     let { confirmDelete } = this.state;
    
// }
deleteStudent = (id, c_id) => {
    axios.delete(`/students?id=${id}&c_id=${c_id}`).then(res => {
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
handleCheckbox = (e) => {
    let arr = this.state.mathAssessments.slice();
    let index = arr.indexOf(e.target.value)
    if (index === -1) {
        arr.push(e.target.value)
    }
    else {
        arr.splice(index, 1);
    }

    this.setState({ mathAssessments: arr })
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
                listCategory="Student"
                InformationalComponent={<StudentInformationalComponent item={item}/>}
             />
            )
           })
            return (
            <div>
                <span id="list-header">
                    <h1>Student List</h1>
                    <button className="item-button" onClick={() => this.toggleModal()}>Add Student</button>
                </span>
                {students}
                <Modal 
                    screens={3}
                    addName={"Student"}
                    addFn={this.addStudent}
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
                    modalToggle={this.state.modalToggle}
                    resetState={this.resetState}
                    itemObj={this.state}
                />
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