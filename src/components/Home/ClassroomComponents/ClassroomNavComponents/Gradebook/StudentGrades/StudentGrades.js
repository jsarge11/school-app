import React, {Component} from 'react'
import './studentgrades.css'
import { connect } from 'react-redux'
import { setStudentList } from '../../../../../../ducks/reducer'
import axios from 'axios';
import StudentRow from './StudentRow/StudentRow';

class StudentGrades extends Component {
    state = {
        studentData: [],
    }
componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        let promises = [];
        let { studentList } = this.props;
        //bringing in data for each student

        studentList.forEach(item => {
            promises.push(axios.get(`/math/score/${item.id}?limit=10`))
        })
        axios.all(promises).then(res => {
            this.setState({ studentData: res })
        })
    }
}

render() {
    let rows = this.state.studentData.map((item, i) => {
        return <StudentRow key={i} item={item}/>
    })
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Scores for {this.props.assessmentType}</h1>
            </div>
        //    <div id="student-grade-wrapper">
        //          <h1>10 Most Recent Scores By Student</h1>
        //         {rows}
        //    </div>
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
export default connect(mapStateToProps, { setStudentList })(StudentGrades)
