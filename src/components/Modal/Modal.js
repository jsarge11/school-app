import React, { Component } from 'react'
import { connect } from 'react-redux'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { setClassroomList } from '../../ducks/reducer'
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import AddButton from './modal-items/AddButton';
import axios from 'axios';

class StageOne extends Component {
    state = {
        viewModal: false
    }

    handleChange = (field, value) => {
        this.setState({ [`${field}`] : value})
    }

    addClassroom = () => {
        let newObj = {
            pin: this.state.pin,
            classroomName: this.state.classroomName 
        }
       axios.post(`/classrooms?id=${this.props.user.t_id}`, newObj).then(res => {
           console.log(res.data)
           this.props.setClassroomList(res.data);
           this.props.toggleModal();
       }).catch(error => console.log(error))
    }   

    render() {
        return (
           <div>
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
                    <input type="text" 
                           placeholder="PIN" 
                           className="user-input" 
                           onChange={(e) => this.handleChange("pin", e.target.value)} />
                    
                    
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