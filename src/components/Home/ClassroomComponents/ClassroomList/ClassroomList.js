import React, { Component } from 'react'
import './classroomlist.css'
import axios from 'axios';
import ListItem from '../../../GlobalComponents/ListItem/ListItem'
import { connect } from 'react-redux'
import { setClassroomList } from '../../../../ducks/reducer'
import Modal from '../../../GlobalComponents/Modal/Modal';
import ClassroomInformationComponent from '../../../GlobalComponents/ListItem/InformationalComponents/ClassroomInformationalComponent'


class ClassroomList extends Component {

    state = {
        modalToggle: false,
    }

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            axios.get('/classrooms?id=' + this.props.user.id).then(res => {
                this.props.setClassroomList(res.data);
            })
        }
    }
    // checkPIN = () => {
    //     if (this.state.pin.length < 4) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    // checkName = () => {
    //     if (this.state.classroomName.length < 1) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    addClassroom = () => {

        // let isValidName = this.checkName();
        // let isValidPIN = this.checkPIN();

        // if (!isValidName) {
        //     document.getElementById("alert_name").innerHTML = "Please enter a non-empty name.";
        // }
        // else {
        //     document.getElementById("alert_name").innerHTML = "";
        // }
        // if (!isValidPIN) {
        //     document.getElementById("alert_pin").innerHTML = "Please enter at least 4 digits.";
        // }
        // else {
        //     document.getElementById("alert_pin").innerHTML = "";
        // }
        // if (isValidName && isValidPIN) {         
            let newObj = {
                pin: this.state.pin,
                classroomName: this.state.classroomName 
            }

        axios.post(`/classrooms?id=${this.props.user.id}`, newObj).then(res => {
            this.props.setClassroomList(res.data);
        }).catch(error => console.log(error))
        
        // }
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
        axios.put('/classrooms/name?id=' + id + '&t_id=' + this.props.user.id, { text: newName }).then(res => {
            this.props.setClassroomList(res.data);
        })
    }

    deleteClassroom = (id) => {
        axios.delete('/classrooms?c_id=' + id + '&t_id=' + this.props.user.id).then(res => {
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
                    listCategory={"Classroom"}
                    InformationalComponent={<ClassroomInformationComponent item={item}/>} />
            )
        })
        return (
            <div onKeyDown={e => this.handleEscape(e)}>
                <header id="list-header">
                    <p> My Classrooms </p>
                    <button className="item-button" onClick={() => this.toggleModal()}> Add Classroom </button>
                </header>          
                    {classrooms}
                <Modal 
                    screens={1} 
                    addName="Classroom" 
                    addFn={this.addClassroom}
                    modalToggle={this.state.modalToggle}
                    handleChange={this.handleChange}
                    resetState={this.toggleModal} 
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