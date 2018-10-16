import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import '../../../../../globalcss/modal.css'
import { setClassroomList } from '../../../../../ducks/reducer'
import axios from 'axios'


class AddClassModal extends Component {

state = {
    classroomName: '',
    newPin: ''
}
handleChange = (field, e) => {
    this.setState({ [`${field}`]: e.target.value })
}
addClassroom = () => {
    let { user } = this.props;
    let { classroomName, newPin } = this.state;
    axios.post(`/classrooms?id=${user.t_id}`, {classroomName: classroomName, pin: newPin}).then(res => {
        this.props.toggleClassroom();
        this.setState({ classroomName: '', pin: '' });
        console.log(res.data);
        this.props.setClassroomList(res.data);
    }).catch(error => console.log(error))
}
render() {
    let modalStyle = !this.props.modalEdit ? {
        zIndex: -99999,
        opacity: 0
    } : {
        zIndez: 99999,
        opacity: 1
    }

    return (
        <div style={modalStyle} className="modal-wrapper">
            <div className="modal-screen-dimmer"></div>
            <div className="modal">
                    <section className="modal-header">
                        Add Classroom

                        <FontAwesomeIcon style={{cursor: 'pointer'}}
                                                    onClick={() => this.props.toggleClassroom()}
                                                    icon="times"
                        />
                    </section>
                    <section className="modal-body">
                        Name: <input onChange={(e) => this.handleChange('classroomName', e)} value={this.state.classroomName} type="text" className="user-enter" />
                        PIN: <input onChange={(e) => this.handleChange('newPin', e)} value={this.state.newPin} type="text" className="user-enter"  maxLength={4}/>
                        <button onClick={() => this.addClassroom()}>Add</button>
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
export default connect(mapStateToProps, {setClassroomList})(AddClassModal)