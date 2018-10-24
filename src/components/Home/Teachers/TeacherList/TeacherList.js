import React from 'react'
import './teacherlist.css'
import { connect } from 'react-redux'
import { toWordGrade } from '../../../../assets/fns/functions';


function TeacherList(props) {
    let teachers = props.teacherList.map(item => {
        let textGrades;
        if (item.grades) {
            textGrades = item.grades.map(numberGrade => {
                let wordGrade = toWordGrade(numberGrade);
                return (
                    <span key={numberGrade}>{wordGrade}, </span>
                )
            })
        }
        else {
            textGrades = 'none';
        }
        return (
            <div key={item.t_id} className="teacher-wrapper">
                <p> Name: <em>{item.first_name} {item.last_name}</em> <br/>
                Grades Taught: <em>{textGrades}</em> <br/>
                Email: <em>{item.email}</em>

                </p>
                {!item.principle ?
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