import React, {Component} from 'react'
import './classroomlist.css'
import axios from 'axios';
import ListItem from './ListItem/ListItem'
import { connect } from 'react-redux'
import { setClassroomList } from '../../../../ducks/reducer'


class ClassroomList extends Component {

state = {
    classroomName: '',
    classroomAdd: false,
}

componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
        axios.get('/classrooms?id=' + this.props.user.t_id).then(res => {
            this.props.setClassroomList(res.data);
     })
    }
}

handleChange = (field, e) => {
    this.setState({ [`${field}`] : e.target.value})
}

addClassroom = () => {
    let { classroomName } = this.state;
    this.setState({ classroomAdd: false, classroomName: '' })
    axios.post('/classrooms?id=' + this.props.user.t_id, {classroomName: classroomName}).then(res => {
        this.props.setClassroomList(res.data);
    }).catch(error => console.log(error))
}
editClassroom = (clsr_id) => {
    let { newName } = this.state;
    axios.put('/classrooms?id=' + clsr_id + '&t_id=' + this.props.user.t_id, {text: newName }).then(res => {
        this.props.setClassroomList(res.data);
    })
}

deleteClassroom = (clsr_id) => {
    axios.delete('/classrooms?id=' + clsr_id + '&t_id=' + this.props.user.t_id).then(res => {
        this.props.setClassroomList(res.data);
    }).catch(error => console.log(error))
}

compare = (a, b) => {
    return a.clsr_id - b.clsr_id;
}

render() {
    let classrooms = this.props.classroomList.sort(this.compare).map((item, i) => {
     return (
       <ListItem key={item.clsr_id}
                 classroom={item}
                 handleChange={this.handleChange}
                 editClassroom={this.editClassroom}
                 deleteClassroom={this.deleteClassroom} />
     )
   })
        return (
           <div>
                {!this.state.classroomAdd ?
                <button onClick={()=>this.setState({ classroomAdd: true })}> Add Classroom </button> :
                <div>
                    <input type="text" onChange={(e) => this.handleChange("classroomName", e)} value={this.state.classroomName}/>
                    <input type="submit" value="Add Class" onClick={()=>this.addClassroom()}/>
                </div>
            }

                <div id="classroom-list-wrapper">
                  {classrooms}
                </div>
           </div>
        )
    }
}
function mapStateToProps(state) {
    let {classroomList} = state;
    return {
        classroomList
    }
}
export default connect(mapStateToProps, {setClassroomList})(ClassroomList)