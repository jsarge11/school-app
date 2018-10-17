import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { setTeacherList} from '../../../../ducks/reducer'


class AddTeacherModal extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        admin_privileges: false,
        principle: false
    }
    handleChange = (field, e) => {
        this.setState({ [`${field}`]: e.target.value })
    }
    addTeacher = () => {
        let { user } = this.props;
        let { first_name, last_name, email, admin_privileges, principle } = this.state;
        axios.post(`/teachers?id=${user.t_id}`, {first_name, last_name, email, admin_privileges, principle, school_id: user.school_id}).then(res => {
            console.log(res.data[0]);
            this.props.toggleTeacher();
            this.setState({ first_name: '', last_name: '', email: '' });
            this.props.setTeacherList(res.data);
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
                            Add Teacher:

                            <FontAwesomeIcon style={{cursor: 'pointer'}}
                                                        onClick={() => this.props.toggleTeacher()}
                                                        icon="times"
                            />
                        </section>
                        <section className="modal-body">
                            First Name: <input onChange={(e) => this.handleChange('first_name', e)} value={this.state.first_name} type="text" className="teacher-enter" />
                            Last Name: <input onChange={(e) => this.handleChange('last_name', e)} value={this.state.last_name} type="text" className="teacher-enter" />
                            Email: <input onChange={(e) => this.handleChange('email', e)} value={this.state.email} type="text" className="teacher-enter" />
                            <span className="modal-radio">
                                Principle?
                                Yes <input onChange={() => this.setState({ principle: true })} type="radio" name="principle"/>
                                No <input onChange={() => this.setState({ principle: false })} type="radio" name="principle" defaultChecked />
                            </span>
                            <span className="modal-radio">
                                Admin Privileges?
                                Yes <input onChange={() => this.setState({ admin_privileges: true })} type="radio" name="admin"/>
                                No <input onChange={() => this.setState({ admin_privileges: false })}type="radio"  name="admin" defaultChecked/>
                            </span>

                            <button className="modal-button" onClick={() => this.addTeacher()}> Add Teacher </button>
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
export default connect(mapStateToProps, { setTeacherList })(AddTeacherModal)



