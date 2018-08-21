import React from 'react'
import './studentassessments.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class StudentAssessments extends React.Component {
    state = {
        assessments: [],
        assessmentValue: 1
    }
    componentDidMount() {
        axios.get('/math/assessments/student?id=' + this.props.student.st_id).then(res => {
            if (res.data[0].assessments) {
                this.setState({ assessments: res.data[0].assessments })
            }
        })
    }
    handleClick = (id) => {
        let { assessmentValue, assessments } = this.state;
        if (assessments.includes(+assessmentValue)) {
            alert('Student is already enrolled in that assessment.')
        }
        else {
            axios.post('/math/assessments?id=' + id, {assessmentValue: assessmentValue}).then(res => {
                this.setState({ assessments: res.data[0].assessments })
            })
        }

    }
    removeAssessment = (id, item) => {
        axios.delete(`/math/assessments?id=${id}&item=${item}`, {item: item}).then(res => {
            this.setState({ assessments: res.data[0].assessments })
        })
    }

    handleChange = (e) => {
        this.setState({ assessmentValue: e.target.value })
    }

    render() {
        let { assessments } = this.state;
        let { student } = this.props;
        let courseList;

        if (assessments) {
            courseList = assessments.map((item, i) => {
                let name = '';
                switch(item) {
                    case(1) : name = 'Multiplication'
                        break;
                    case(2) : name = 'Division'
                        break;
                    case(3) : name = 'Addition'
                        break;
                    case(4) : name = 'Subtraction'
                        break;
                    default :
                    name = ''
                }
                return(
                    <div key={i}>
                        {name} <FontAwesomeIcon style={{cursor: 'pointer'}}
                                                onClick={() => this.removeAssessment(student.st_id, item)}
                                                icon="times" />
                    </div>
                )
            })
        }
        else {
            courseList = <div><em>none</em></div>;
        }

        return (
            <div id="studentAssessments-wrapper">
             <p> Current assessments: </p>
             {courseList}
                 <select onChange={this.handleChange} name="assessments">
                    <option id="multiplication" value={1}>Multiplication</option>
                    <option id="division" value={2}>Division</option>
                    <option id="addition" value={3}>Addition</option>
                    <option id="subtraction" value={4}>Subtraction</option>
                 </select>
           <button onClick={() => this.handleClick(student.st_id)}>Add Assessment</button>
            </div>
         )
    }
}