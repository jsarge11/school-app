import React, {Component} from 'react'
import './studentgrades.css'
import { connect } from 'react-redux'
import axios from 'axios';


class StudentGrades extends Component {
getScores() {
    let promises = [];
    this.props.studentList.map(item => {
        promises.push(axios.get(`/math/score?id=${item.st_id}`))
    })
    axios.all(promises).then(results => {
        console.log(results);
    })
}
render() {
    console.log(this.getScores());
        return (
           <div id="student-grade-wrapper">
            {/* {students} */}
           </div>
        )
    }
}
function mapStateToProps(state) {
    let { user, classroom, studentList } = state;
    return {
        user,
        classroom,
        studentList
    }
}
export default connect(mapStateToProps)(StudentGrades)
