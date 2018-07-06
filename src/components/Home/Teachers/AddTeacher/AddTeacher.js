import React, {Component} from 'react'
import './addteacher.css'
import Inputs from './Inputs'
import axios from 'axios';
import bcrypt from 'bcryptjs'
import { connect } from 'react-redux'
import { setTeacherList } from '../../../../ducks/reducer'

class AddTeacher extends Component {
    state = {
        first_name: '',
        last_name: '',
        gender: 'M',
        admin_privileges: false,
        principle: false,
        email: '',
        hash: '',
        addTeacher: false,
    }
    handleChange = (field, e) => {
        this.setState({ [`${field}`] : e.target.value });
    }
    addTeacher = () => {
        this.setState({ addTeacher: false });
        let {first_name, last_name, gender, admin_privileges, principle, email, password } = this.state;
        let hash = bcrypt.hashSync(password, 10);
        let teacher = {
            first_name,
            last_name,
            gender,
            school_id: this.props.user.school_id,
            admin_privileges,
            principle,
            email,
            hash
        }
        axios.post('/teachers', teacher).then(res => {
            this.props.setTeacherList(res.data);
        })
    }
    addTeacherOff = () => {
        this.setState({ addTeacher: false })
    }
render() {
        return (
           <div id="add-teacher-wrapper">
            {this.state.addTeacher ?
            <Inputs gender={this.state.gender}
                    addTeacherOff={this.addTeacherOff}
                    addTeacher={this.addTeacher}
                    handleChange={this.handleChange}/>
                    :
                <button onClick={() => this.setState({ addTeacher: true })}> Add Teacher </button> }
           </div>
        )
    }
}
export default connect(null, { setTeacherList })(AddTeacher)