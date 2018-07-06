import React, {Component} from 'react'
import './teachers.css'
import AddTeacher from './AddTeacher/AddTeacher';
import TeacherList from './TeacherList/TeacherList';
import { connect } from 'react-redux'
import axios from 'axios'
import { setTeacherList } from '../../../ducks/reducer'

class Teachers extends Component {
    componentDidMount() {
        axios.get('/teachers?id=' + this.props.user.school_id).then(res => {
            this.props.setTeacherList(res.data);
        })
    }
render() {
        return (
           <div id="teacher-wrapper">
            <AddTeacher user={this.props.user}/>
            <TeacherList />
           </div>
        )
    }
}
export default connect(null, { setTeacherList })(Teachers)