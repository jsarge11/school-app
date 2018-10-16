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
            <AddTeacher />
            <TeacherList />
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
export default connect(mapStateToProps, { setTeacherList })(Teachers)