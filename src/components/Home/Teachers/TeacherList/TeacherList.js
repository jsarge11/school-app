import React from 'react'
import './teacherlist.css'
import { connect } from 'react-redux'

function TeacherList(props) {
    let teachers = props.teacherList.map(item => {
        return (
            <div key={item.t_id} className="teacher-wrapper">
                <p> Name: {item.first_name} {item.last_name} </p>
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