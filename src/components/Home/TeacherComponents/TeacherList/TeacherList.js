import React, {Component} from 'react'
import Modal from '../../../GlobalComponents/Modal/Modal'
import './teacherlist.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { setTeacherList } from '../../../../ducks/reducer'
import ListItem from '../../../GlobalComponents/ListItem/ListItem';
import TeacherInformationComponent from '../../../GlobalComponents/ListItem/InformationalComponents/TeacherInformationalComponent'

const initialState = {
    modalToggle: false,
    pin: '',
    name: '',
    email: '',
    teacher: false,
    admin: false,
    principal: false,
    gradesTaught: []
}
class TeacherList extends Component {
    state = initialState;

componentDidMount() {
    axios.get('/teachers?id=' + this.props.user.school_id).then(res => {
        this.props.setTeacherList(res.data);
    })
}
handleChange = (field, value) => {
    if (field === "teacher" || field === "admin" || field === "principal") {
        switch(field) {
            case "principal":
                this.setState({ teacher: false, admin: false, principal: true })
                break;
            case "teacher":
                this.setState({ teacher: true, admin: false, principal: false })
                break;
            case "admin":
                this.setState({ teacher: false, admin: true, principal: false })
                break;
            default:
                this.setState({ teacher: false, admin: false, principal: false })
        }
    }
    else {
        this.setState({ [`${field}`] : value})
    }
}
handleCheckbox = (e) => {
    let arr = this.state.gradesTaught.slice();
    let index = arr.indexOf(e.target.value)
    if (index === -1) {
        arr.push(e.target.value)
    }
    else {
        arr.splice(index, 1);
    }

    this.setState({ gradesTaught: arr })
}

toggleModal = () => {
    this.setState({ modalToggle: true })
}

resetState = () => {
    this.setState(initialState);
}

addTeacher = () => {
    let {name, email, gradesTaught, admin, principal } = this.state;
    let { setTeacherList, user } = this.props;
    let admin_privileges = admin || principal;
    let teacherObj = {
        name,
        admin_privileges,
        principal,
        email,
        grades: gradesTaught,
        school_id: user.school_id
    }
    axios.post('/teachers', teacherObj).then(response => {
       setTeacherList(response.data);
    }).catch(error => console.log(error))
}
deleteTeacher = (id) => {
    axios.delete('/teachers?id=' + id).then(res => {
        this.props.setTeacherList(res.data);
    })
    .catch((error) => {
        if (error.response) {
            if (error.response.data.code === '23503') {
                alert('Teacher still has classrooms, please delete classrooms first.')
            }
            else {
                alert('Something broke on the server. Please try again.')
            }
        }
        else {
            alert('No response received.')
        }
        
    })
}
render() {
    let school_name;
    if (this.props.teacherList[0]) {
        school_name = this.props.teacherList[0].school_name;
    }
    let teachers = this.props.teacherList.map(item => {
        return (
            <ListItem 
                key={item.id}
                item={item}
                listCategory="Teacher"
                deleteFn={this.deleteTeacher}
                InformationalComponent={<TeacherInformationComponent item={item}/>} 
            />
        )
    })
        return (
           <div id="teacher-wrapper">
           <h1>Home</h1>
           <header id="list-header">
                    <h2> Teachers at {school_name} </h2>
                    <button className="item-button" onClick={() => this.toggleModal()}> Add Teacher </button>
            </header>
           
            {teachers}
            <Modal
                screens={4} 
                addName="Teacher" 
                modalToggle={this.state.modalToggle}
                handleCheckbox={this.handleCheckbox}
                handleChange={this.handleChange}
                addFn={this.addTeacher}
                resetState={this.resetState}
                itemObj={this.state}
            />
           </div>
        )
    }
}
function mapStateToProps(state) {
    let { user, teacherList } = state;
    return {
        user,
        teacherList
    }
}
export default connect(mapStateToProps, { setTeacherList })(TeacherList)