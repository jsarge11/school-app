import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
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
        console.log(res.data);
    })
}
render() {
        return (
        <div id="edit-modal-wrapper">
            <div id="edit-modal-screen-dimmer"></div>
            <div id="edit-modal">
                    <section className="modal-header">
                        Enter Classroom PIN: (4 digits)

                        <FontAwesomeIcon style={{cursor: 'pointer'}}
                                                    onClick={() => alert('cancel me!')}
                                                    icon="times"
                        />
                    </section>
                    <section className="modal-body">
                        <input onChange={this.handleChange} value={this.state.newPin} type="text" name="user" id="user-enter" maxLength={4}/>
                        <button>Change</button>
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
export default connect(mapStateToProps)(EditModal)