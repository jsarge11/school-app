import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { setClassroom } from '../../../ducks/reducer'
import axios from 'axios'
import './editmodal.css'


class EditModal extends Component {

state = {
    newPin: ''
}
handleChange = (e) => {
    this.setState({ newPin: e.target.value })
}
changePIN = () => {
    let { user, classroom } = this.props;
    let { newPin } = this.state;

    axios.put(`/classrooms/pin?id=${user.t_id}`, {clsr_id: classroom.clsr_id, pin: newPin }).then(res => {

        this.props.setClassroom(res.data[0]);
        this.setState({ newPin: '' });
        this.props.toggleEdit();
    }).catch((error) => console.log(error))
}
render() {
    console.log(this.props.classroom);
    let modalStyle = !this.props.pinEdit ? {
        zIndex: -99999,
        opacity: 0
    } : {
        zIndez: 99999,
        opacity: 1
    }

    return (
        <div style={modalStyle} id="edit-modal-wrapper">
            <div id="edit-modal-screen-dimmer"></div>
            <div id="edit-modal">
                    <section className="modal-header">
                        Enter Classroom PIN: (4 digits)

                        <FontAwesomeIcon style={{cursor: 'pointer'}}
                                                    onClick={() => this.props.toggleEdit()}
                                                    icon="times"
                        />
                    </section>
                    <section className="modal-body">
                        <input onChange={this.handleChange} value={this.state.newPin} type="text" name="user" id="user-enter" maxLength={4}/>
                        <button onClick={() => this.changePIN()}>Change</button>
                    </section>

            </div>
        </div>
        )
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom, user} = state;
    return {
        classroom,
        classroomList,
        user
    }
}
export default connect(mapStateToProps, { setClassroom })(EditModal)