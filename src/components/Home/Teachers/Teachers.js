import React, {Component} from 'react'
import './teachers.css'
import AddTeacherModal from './AddTeacherModal/AddTeacherModal';
import TeacherList from './TeacherList/TeacherList';
import { connect } from 'react-redux'
import axios from 'axios'
import { setTeacherList } from '../../../ducks/reducer'

class Teachers extends Component {
    state = {
        modalEdit: false
    }
    componentDidMount() {
        axios.get('/teachers?id=' + this.props.user.school_id).then(res => {
            this.props.setTeacherList(res.data);
        })
    }
    toggleTeacher = () => {
        this.setState({ modalEdit: !this.state.modalEdit})
    }
render() {
        return (
           <div id="teacher-wrapper">
            <button onClick={() => this.toggleTeacher()}> Add Teacher </button>
            <AddTeacherModal toggleTeacher={this.toggleTeacher} modalEdit={this.state.modalEdit} />
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