import React, {Component} from 'react'
import './classroomlist.css'
import axios from 'axios';


export default class ClassroomList extends Component {

state = {
    classroomName: '',
    classroomAdd: false,
    classroomEdit: false,
    classrooms: [],
    user: {}
}

componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
        axios.get('/classrooms?id=' + this.props.user.t_id).then(res => {
            this.setState({ classrooms: res.data })
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
        this.setState({ classrooms: res.data })
    }).catch(error => console.log(error))
}
editClassroom = () => {

}

deleteClassroom = (clsr_id) => {
    axios.delete('/classrooms?id=' + clsr_id).then(res => {
        this.setState({ classrooms: res.data })
    }).catch(error => console.log(error))
}

render() {
    let classrooms = this.state.classrooms.map((item, i) => {
        console.log(item.clsr_id)
     return (
       <div className="classroom-list-item" key={item+i}>
             {!this.state.classroomEdit ?
                <div className="name-section">
                    <p> Name: {item.name} &nbsp; </p>
                    <p id="edit" onClick={()=>this.setState({classroomEdit: true})}>&#9998;</p>
                </div>
                :
                <div className="name-section">
                    <p> Name: </p>
                    <input type="text" onChange={(e) => this.handleChange("new_name", e)}/>
                    <input type="submit" value="Submit"/>
                    <p> X </p>
                </div>
            }


         <p id="delete" onClick={()=>this.deleteClassroom(item.clsr_id)}> &#128465;</p>
       </div>
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