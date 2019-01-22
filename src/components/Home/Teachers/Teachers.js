import React, {Component} from 'react'
import Modal from '../../Modal/Modal'
import './teachers.css'
import TeacherList from './TeacherList/TeacherList';
import { connect } from 'react-redux'
import axios from 'axios'
import { setTeacherList } from '../../../ducks/reducer'

class Teachers extends Component {
    state = {
        modalToggle: false
    }

componentDidMount() {
    axios.get('http://localhost:4000/teachers?id=' + this.props.user.school_id).then(res => {
        this.props.setTeacherList(res.data);
    })
}
toggleModal = () => {
    console.log('toggling modal')
    this.setState({ modalToggle: !this.state.modalToggle})
}
deleteTeacher = (id) => {
    axios.delete('http://localhost:4000/teachers?id=' + id).then(res => {
        this.props.setTeacherList(res.data);
    }).catch(() => alert('Cannot delete, teacher has classrooms. Please delete classrooms then try again.'))
}
render() {
        return (
           <div id="teacher-wrapper">
            <button onClick={() => this.toggleModal()}> Add Teacher </button>
            <TeacherList
                deleteTeacher={this.deleteTeacher} />
            <Modal
                    screens={3} 
                    addName="Teachers" 
                    modalToggle={this.state.modalToggle}
                    toggleModal={this.toggleModal} 
            />
           </div>
        )
    }
}
function mapStateToProps(state) {
    let { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps, { setTeacherList })(Teachers)