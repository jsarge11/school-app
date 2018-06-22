import React, {Component} from 'react'
import { connect } from 'react-redux'
import './students.css'


class Students extends Component {

state = {
    addStudent: false,
}

addStudent = () => {
    this.setState({ addStudent: false })
    alert(`added ${this.state.first_name} ${this.state.last_name}`);
    this.setState({ first_name: '',
                    last_name: ''})
}
handleChange = (field, e) => {
    this.setState({ [`${field}`] : e.target.value})
}
render() {
        return (
           <div id="student-wrapper">
            Students for classroom {this.props.classroom.name}
            {this.state.addStudent ?
            <div>
                <input type="text" placeholder="first_name" onChange={(e)=>this.handleChange("first_name", e)} value={this.state.first_name}/>
                <input type="text" placeholder="last_name" onChange={(e)=>this.handleChange("last_name", e)} value={this.state.last_name}/>
                <button onClick={()=>this.addStudent()}>Add</button>
            </div>
            :

            <button onClick={()=>this.setState({ addStudent: true })}>Add Student</button>}
           </div>
        )
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom} = state;
    return {
        classroom,
        classroomList
    }
}
export default connect(mapStateToProps)(Students)