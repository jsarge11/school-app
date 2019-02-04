import React, {Component} from 'react'
import Modal from '../../../GlobalComponents/Modal/Modal'
import './teacherlist.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { setTeacherList } from '../../../../ducks/reducer'
import ListItem from '../../../GlobalComponents/ListItem/ListItem';
import TeacherInformationComponent from '../../../GlobalComponents/ListItem/InformationalComponents/TeacherInformationComponent'

class TeacherList extends Component {
    state = {
        modalToggle: false,
        schoolName: ''
    }

componentDidMount() {
    axios.get('/teachers?id=' + this.props.user.school_id).then(res => {
        console.log(res.data);
        this.props.setTeacherList(res.data);
    })
}
toggleModal = () => {
    this.setState({ modalToggle: !this.state.modalToggle})
}
deleteTeacher = (id) => {
    axios.delete('/teachers?id=' + id).then(res => {
        this.props.setTeacherList(res.data);
    })
    .catch((error) => {
        if (error.response) {
            console.log(error.response)
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
                addName="Teachers" 
                modalToggle={this.state.modalToggle}
                toggleModal={this.toggleModal} 
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