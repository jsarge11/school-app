import React from 'react'
import './teacherlist.css'
import { connect } from 'react-redux'

function TeacherList(props) {
    let teachers = props.teacherList.map(item => {
        return (
            <div key={item.t_id} className="teacher-wrapper">
                {item.first_name}
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