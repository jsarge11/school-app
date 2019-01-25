import React, { Component } from 'react'
import './classroomlist.css'
import axios from 'axios';
import ListItem from './ListItem/ListItem'
import { connect } from 'react-redux'
import { setClassroomList } from '../../../../ducks/reducer'
import Modal from '../../../Modal/Modal';


class ClassroomList extends Component {

    state = {
        modalToggle: false,
    }

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            axios.get('http://localhost:4000/classrooms?id=' + this.props.user.t_id).then(res => {
                this.props.setClassroomList(res.data);
            })
        }
    }

    handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.setState({ modalToggle: false })
        }
    }

    handleChange = (field, e) => {
        console.log(e);
        this.setState({ [`${field}`]: e.target.value })
    }

    editClassroomName = (clsr_id) => {
        let { newName } = this.state;
        axios.put('http://localhost:4000/classrooms/name?id=' + clsr_id + '&t_id=' + this.props.user.t_id, { text: newName }).then(res => {
            this.props.setClassroomList(res.data);
        })
    }

    deleteClassroom = (clsr_id) => {
        axios.delete('http://localhost:4000/classrooms?id=' + clsr_id + '&t_id=' + this.props.user.t_id).then(res => {
            this.props.setClassroomList(res.data);
        }).catch(() => alert('Cannot delete, classroom contains students. Please delete students and try again.'))
    }

    toggleModal = () => {
        this.setState({ modalToggle: !this.state.modalToggle })
    }
    //ordering list the same way everytime
    compare = (a, b) => {
        return a.clsr_id - b.clsr_id;
    }

    render() {
        let classrooms = this.props.classroomList.sort(this.compare).map((item, i) => {
            return (
                <ListItem key={item.clsr_id}
                    classroom={item}
                    handleChange={this.handleChange}
                    editClassroomName={this.editClassroomName}
                    deleteClassroom={this.deleteClassroom} />
            )
        })
        return (
            <div onKeyDown={e => this.handleEscape(e)}>
                <button onClick={() => this.toggleModal()}> Add Classroom </button>
                <div id="classroom-list-wrapper">
                    {classrooms}
                </div>
                <Modal 
                    screens={1} 
                    addName="Classroom" 
                    modalToggle={this.state.modalToggle}
                    toggleModal={this.toggleModal} 
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    let { classroomList, user } = state;
    return {
        classroomList,
        user
    }
}
export default connect(mapStateToProps, { setClassroomList })(ClassroomList)