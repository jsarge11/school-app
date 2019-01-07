import React, {Component} from 'react'
import './classroomlist.css'
import axios from 'axios';
import ListItem from './ListItem/ListItem'
import { connect } from 'react-redux'
import { setClassroomList } from '../../../../ducks/reducer'
import AddClassModal from './AddClassModal/AddClassModal';


class ClassroomList extends Component {

state = {
    modalEdit: false,
}

componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
        axios.get('http://localhost:4000/classrooms?id=' + this.props.user.t_id).then(res => {
            this.props.setClassroomList(res.data);
     })
    }
}

handleChange = (field, e) => {
    this.setState({ [`${field}`] : e.target.value})
}

editClassroomName = (clsr_id) => {
    let { newName } = this.state;
    axios.put('http://localhost:4000/classrooms/name?id=' + clsr_id + '&t_id=' + this.props.user.t_id, {text: newName }).then(res => {
        this.props.setClassroomList(res.data);
    })
}

deleteClassroom = (clsr_id) => {
    axios.delete('http://localhost:4000/classrooms?id=' + clsr_id + '&t_id=' + this.props.user.t_id).then(res => {
        this.props.setClassroomList(res.data);
    }).catch(() => alert('Cannot delete, classroom contains students. Please delete students and try again.'))
}

toggleClassroom = () => {
    this.setState({ modalEdit: !this.state.modalEdit})
}
//ordering list the same way everytime
compare = (a, b) => {
    return a.clsr_id - b.clsr_id;
}

render() {
    let classrooms = this.props.classroomList.sort(this.compare).map((item, i) => {
     return (
       <ListItem key={item.clsr_id}
                 classroom={item}
                 handleChange={this.handleChange}
                 editClassroomName={this.editClassroomName}
                 deleteClassroom={this.deleteClassroom} />
     )
   })
        return (
           <div>
                <button onClick={() => this.toggleClassroom()}> Add Classroom </button>
                <AddClassModal modalEdit={this.state.modalEdit} toggleClassroom={this.toggleClassroom}/>

                <div id="classroom-list-wrapper">
                  {classrooms}
                </div>


           </div>
        )
    }
}
function mapStateToProps(state) {
    let {classroomList, user} = state;
    return {
        classroomList,
        user
    }
}
export default connect(mapStateToProps, {setClassroomList})(ClassroomList)