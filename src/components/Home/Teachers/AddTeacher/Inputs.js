import React from 'react'
// import './input.css'


export default function Inputs(props) {
    return (
       <div id="input-wrapper">
        <input placeholder="first name" onChange={(e)=>props.handleChange("first_name", e)}/>
        <input placeholder="last name" onChange={(e)=>props.handleChange("last_name", e)}/>
        <input placeholder="email" onChange={(e)=>props.handleChange("email", e)}/>
        <select value={props.gender} onChange={(e)=>props.handleChange("gender", e)}>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
        <input type="password" placeholder="password" onChange={(e)=>props.handleChange("password", e)}/>
        <button onClick={() => props.addTeacher()}>Add Teacher</button>
        <p style={{cursor: 'pointer', display: 'inline', fontSize: 20}} onClick={() => props.addTeacherOff()}>&#735;</p>
       </div>
    )
}