import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setClassroom } from '../../../../../ducks/reducer'
import './listitem.css'

class ListItem extends Component {
state = {
 classroomEdit: false,
}

render() {
  let { classroom } = this.props;
   return (
    <div className="classroom-list-item">
    {!this.state.classroomEdit ?
       <div className="name-section">
           <p> Name: </p> &nbsp;
           <Link onClick={()=>this.props.setClassroom(classroom)} to={`/classrooms/gradebook`}>{classroom.name}
           </Link>
           &nbsp;
           <p id="edit" onClick={()=>this.setState({classroomEdit: true})}>&#9998;</p>
       </div>
       :
       <div className="name-section">
           <p> Name: </p>
           <input type="text" onChange={(e) => this.props.handleChange("newName", e)}/>
           <input type="submit" value="Submit"
             onClick={()=>{
                           this.props.editClassroom(classroom.clsr_id);
                           this.setState({ classroomEdit: false })}
                     }
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