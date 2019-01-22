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

class StageOne extends Component {

    state = {
        classroomName: '',
        pin: ''
    }
    handleChange = (field, value) => {
        this.setState({ [`${field}`] : value})
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addClassroom();
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

    

    render() {
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
                    <input type="text" 
                           placeholder="Name"
                           className="user-input" 
                           onChange={(e) => this.handleChange("classroomName", e.target.value)} />
                     <span className="alert" id="alert_name"></span>
                    <input type="number" 
                           placeholder="PIN" 
                           className="user-input" 
                           onChange={(e) => this.handleChange("pin", e.target.value)} />
                     <span className="alert" id="alert_pin"></span>
                    
                    
                {/* <AddClassroom /> */}
                {this.props.screens <= 1 ? 
                    <AddButton 
                        fn={this.addClassroom} 
                        addName="Classroom" /> :
                    <p>There will be more ... </p>
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
export default connect(mapStateToProps, { setClassroomList })(StageOne)