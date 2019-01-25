import React, { Component } from 'react'
import { connect } from 'react-redux'
import './modal.css'
import '../../globalcss/alerts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { setClassroomList } from '../../ducks/reducer'
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import AddButton from './modal-items/AddButton';
import axios from 'axios';
import Breadcrumbs from './modal-items/Breadcrumbs'

class Modal extends Component {

    state = {
        classroomName: '',
        pin: '',
        activeCrumb: 0,
        teacherName: '',
        teacherEmail: ''
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

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addClassroom();
        }
    } 
    nextPage = () => {
        if (this.state.activeCrumb < this.props.screens - 1) {
            this.setState({ activeCrumb: this.state.activeCrumb + 1 })
        }
    }
    prevPage = () => {
        if (this.state.activeCrumb > 0) {
            this.setState({ activeCrumb: this.state.activeCrumb - 1 })
        }
    }

    checkPIN = () => {
        if (this.state.pin.length < 4) {
            return false;
        }
        else {
            return true;
        }
    }

    checkName = () => {
        if (this.state.classroomName.length < 1) {
            return false;
        }
        else {
            return true;
        }
    }

    addClassroom = () => {

        let isValidName = this.checkName();
        let isValidPIN = this.checkPIN();

        if (!isValidName) {
            document.getElementById("alert_name").innerHTML = "Please enter a non-empty name.";
        }
        else {
            document.getElementById("alert_name").innerHTML = "";
        }
        if (!isValidPIN) {
            document.getElementById("alert_pin").innerHTML = "Please enter at least 4 digits.";
        }
        else {
            document.getElementById("alert_pin").innerHTML = "";
        }
        if (isValidName && isValidPIN) {         
            let newObj = {
                pin: this.state.pin,
                classroomName: this.state.classroomName 
            }
            axios.post(`/classrooms?id=${this.props.user.t_id}`, newObj).then(res => {
                this.props.setClassroomList(res.data);
                this.props.toggleModal();
            }).catch(error => console.log(error))
        }
    }   


    componentSwitch = () => {
        switch(this.props.addName) {
            case("Classroom") :
                return <AddClassroom handleChange={this.handleChange} /> 
            case("Teachers") :
                return <AddTeacher 
                    handleChange={this.handleChange} 
                    activeCrumb={this.state.activeCrumb}
                    />
            default :
                return <div>Internal Error - Please Contact Web Support with Error #A1111</div>
        }
    }
    

    render() {
        console.log(this.state);
        return (
           <div onKeyDown={(e) => this.handleEnter(e)}>
               {this.props.modalToggle ? <div>
                <div className="modal-screen-dimmer"></div>
                <div className="modal">
                    <FontAwesomeIcon 
                        icon={faTimesCircle} 
                        className="close-button"
                        onClick={() => this.props.toggleModal()}
                    />
                 <section className="modal-body">
                 
                {this.componentSwitch()}

                {this.props.screens <= 1 ? 
                    <AddButton 
                        fn={this.addClassroom} 
                        addName={this.props.addName} /> :
                    <Breadcrumbs 
                        active={this.state.activeCrumb} 
                        crumbs={this.props.screens}
                        nextPage={this.nextPage}
                        prevPage={this.prevPage}
                    />
                }
               
                </section>
                </div>
            </div> : ''}
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
export default connect(mapStateToProps, { setClassroomList })(Modal)