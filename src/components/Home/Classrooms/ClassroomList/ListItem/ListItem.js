import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setClassroom } from '../../../../../ducks/reducer'
import './listitem.css'

class ListItem extends Component {
state = {
 classroomEdit: false,
}

handleEnter = (e) => {
    console.log(e)
    if (e.key == 'Enter') {
        this.handleSubmit();
    }
} 
handleEscape = (e) => {
    console.log('hey', e)
    if (e.key == 'Escape') {
        this.setState({ classroomEdit: false })
    }
} 

handleSubmit = () => {
    let { classroom } = this.props;
    this.props.editClassroomName(classroom.clsr_id);
    this.setState({ classroomEdit: false })
}

render() {
    let { classroom } = this.props;
   return (
    <div className="classroom-list-item">
    {!this.state.classroomEdit ?
       <div className="name-section">
           <p> Classroom Name: </p> &nbsp;
           <Link onClick={()=>this.props.setClassroom(classroom)} to={`/classrooms/gradebook`}>
            <span className="classroom-name">{classroom.name}</span>
           </Link>
           &nbsp;
           <p id="edit" onClick={()=>this.setState({classroomEdit: true})}>&#9998;</p>
       </div>
       :
       <div className="name-section">
           <p> Classroom Name: </p>
           <input type="text" 
                  onKeyPress={(e) => this.handleEnter(e)} 
                  onKeyDown={(e) => this.handleEscape(e)} 
                  onChange={(e) => this.props.handleChange("newName", e)}
                  />
           <input type="submit" value="Submit"
             onClick={()=>this.handleSubmit()}
           />
           <p id="edit" onClick={()=>this.setState({ classroomEdit: false, classroomName: '' })}>&#10007;</p>
       </div>
     }
    <p id="delete" onClick={()=>this.props.deleteClassroom(classroom.clsr_id)}> &#128465;</p>
   </div>
    )
   }
  }
function mapStateToProps(state) {
    return {
        state
    }
}
export default connect(mapStateToProps, { setClassroom })(ListItem)