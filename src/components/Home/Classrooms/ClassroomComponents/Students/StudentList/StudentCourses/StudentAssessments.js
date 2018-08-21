import React from 'react'
import './studentassessments.css'
import axios from 'axios'


export default class StudentAssessments extends React.Component {
    state = {
        assessments: [],
        assessmentValue: 1
    }
    componentDidMount() {
        axios.get('/math/assessments/student?id=' + this.props.student.st_id).then(res => {
            this.setState({ assessments: res.data[0].assessments })
        })
    }
    handleClick = (id) => {
        let { assessmentValue } = this.state;
        axios.post('/math/assessments?id=' + id, {assessmentValue: assessmentValue}).then(res => {
            this.setState({ assessments: res.data[0].assessments })
        })
    }

    handleChange = (e) => {
        this.setState({ assessmentValue: e.target.value })
    }

    render() {
        let { assessments } = this.state;
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
                        {name}
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
                 <select onChange={this.handleChange} name="assessments" id="assessments">
                     <option value={1}>Multiplication</option>
                     <option value={2}>Division</option>
                     <option value={3}>Addition</option>
                     <option value={4}>Subtraction</option>
                 </select>
           <button onClick={() => this.handleClick(this.props.student.st_id)}>Add Assessment</button>
            </div>
         )
    }
}