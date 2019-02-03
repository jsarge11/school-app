import React, { Component } from 'react'
import './classroomlist.css'
import axios from 'axios';
import ListItem from '../../../ListItem/ListItem'
import { connect } from 'react-redux'
import { setClassroomList } from '../../../../ducks/reducer'
import Modal from '../../../Modal/Modal';
import ClassroomInformationComponent from '../../../ListItem/InformationalComponents/ClassroomInformationComponent'


class ClassroomList extends Component {

    state = {
        modalToggle: false,
    }

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            axios.get('http://localhost:4000/classrooms?id=' + this.props.user.id).then(res => {
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
        this.setState({ [`${field}`]: e.target.value })
    }

    editClassroomName = (id) => {
        let { newName } = this.state;
        axios.put('http://localhost:4000/classrooms/name?id=' + id + '&t_id=' + this.props.user.id, { text: newName }).then(res => {
            this.props.setClassroomList(res.data);
        })
    }

    deleteClassroom = (id) => {
        axios.delete('http://localhost:4000/classrooms?c_id=' + id + '&t_id=' + this.props.user.id).then(res => {
            this.props.setClassroomList(res.data);
        }).catch(() => alert('Cannot delete, classroom contains students. Please delete students and try again.'))
    }

    toggleModal = () => {
        this.setState({ modalToggle: !this.state.modalToggle })
    }
    //ordering list the same way everytime
    compare = (a, b) => {
        return a.id - b.id;
    }

    render() {
        let classrooms = this.props.classroomList.sort(this.compare).map((item, i) => {
            return (
                <ListItem key={item.id}
                    item={item}
                    handleChange={this.handleChange}
                    editFn={this.editClassroomName}
                    deleteFn={this.deleteClassroom}
                    InformationalComponent={<ClassroomInformationComponent item={item}/>} />
            )
        })
        return (
            <div onKeyDown={e => this.handleEscape(e)}>
                <header id="list-header">
                    <h2> My Classrooms </h2>
                    <button className="item-button" onClick={() => this.toggleModal()}> Add Classroom </button>
                </header>          
                    {classrooms}
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