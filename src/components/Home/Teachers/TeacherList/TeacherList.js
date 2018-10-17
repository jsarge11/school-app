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
                    <span>{wordGrade}, </span>
                )
            })
        }
        else {
            textGrades = 'none';
        }
        return (
            <div key={item.t_id} className="teacher-wrapper">
                <p> Name: <em>{item.first_name} {item.last_name}</em> <br/> Grades Taught: <em>{textGrades}</em> </p>
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