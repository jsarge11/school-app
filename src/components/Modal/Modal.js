import React, { Component } from 'react'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import AddButton from './modal-items/AddButton';

export default class StageOne extends Component {
    state = {
        viewModal: false
    }

    addClassroom = () => {

    }

    render() {
        console.log(this.props);
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
                    <input type="text" placeholder="Name" className="user-input" />
                    <input type="text" placeholder="PIN" className="user-input" />
                    
                    
                {/* <AddClassroom /> */}
                {this.props.screens <= 1 ? 
                    <AddButton 
                        toggleModal={this.props.toggleModal} 
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