import React from 'react'
import { connect } from 'react-redux'
import './addstudent.css'


function AddStudent(props) {
    return (
        <div id="add-student-wrapper">
            <input type="text" placeholder="first_name" onChange={(e)=>props.handleChange("first_name", e)} value={props.first_name}/>
            <input type="text" placeholder="last_name" onChange={(e)=>props.handleChange("last_name", e)} value={props.last_name}/>
            <input type="text" placeholder={props.first_name+props.last_name || `username`} onChange={(e)=>props.handleChange("username", e)} value={props.username}/>
            <input type="number" placeholder="pin" onChange={(e)=>props.handleChange("pin", e)} value={props.pin}/>
            <input type="number" placeholder="points" onChange={(e)=>props.handleChange("points", e)} value={props.points}/>
            <input type="text" placeholder="grade" onChange={(e)=>props.handleChange("grade", e)} value={props.grade}/>
            <button onClick={()=>props.addStudent()}>Add</button>
        </div>
    )
}
    function mapStateToProps(state) {
        let {classroomList, classroom} = state;
        return {
            classroom,
            classroomList
        }
    }
    export default connect(mapStateToProps)(AddStudent)