import React from 'react'
import './teacherlist.css'
import { connect } from 'react-redux'


function TeacherList(props) {
    let grades = "none";
    let teachers = props.teacherList.map(item => {
        if (item.grades) {
            grades = item.grades.map(grade => {
                return(`${grade} `)
            })
        }
        return (
            <div key={item.t_id} className="teacher-wrapper">
                <p> Name: <em>{item.name} </em> <br/>
                Grades Taught: <em>{grades}</em> <br/>
                Email: <em>{item.email}</em>

                </p>
                {!item.principal ?
                    <p className="delete-teacher" style={{cursor: 'pointer'}} onClick={() => props.deleteTeacher(item.t_id)}>&#128465;</p>
                :
                 <p style={{display: 'none'}}>&#128465;</p>}

            </div>
        )
    })
    return (
       <div id="teacher-list-wrapper">
        {teachers}
       </div>
    )
}
function mapStateToProps(state) {
    let { teacherList } = state;
    return {
        teacherList
    }
}
export default connect(mapStateToProps)(TeacherList)