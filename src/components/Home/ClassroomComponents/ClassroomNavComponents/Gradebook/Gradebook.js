import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import './gradebook.css'
import StudentGrades from './StudentGrades/StudentGrades';


class Gradebook extends Component {

state = {
    pinEdit: false,
    assessmentType: 'Multiplication'
}

toggleEdit = () => {
    this.setState({ pinEdit: !this.state.pinEdit})
}
changeAssessmentType = (assessmentType) => {
    this.setState({ assessmentType: assessmentType });
}
render() {
    let { assessmentType } = this.state;
    let activeStyle = {
        background: 'navy',
        color: 'white'
    }
    let inactiveStyle = {
        background: 'none',
        color: 'black'
    }
    if (!this.props.classroom) {
        return <Redirect push to="/home" />
    }
    else {
            return (
            <div>
                <h1>Gradebook</h1>
                <section id="gradebook-wrapper">
                <h2>Classroom: {this.props.classroom.name} &nbsp; Classroom PIN: {this.props.classroom.pin}</h2>
                    <nav id="assessment-tab">
                        <h3 
                            className="assessment-tab-item"
                            style={assessmentType === 'Multiplication' ? activeStyle : inactiveStyle} 
                            onClick={() => this.changeAssessmentType("Multiplication")}>Multiplication
                        </h3>
                        <h3 
                            className="assessment-tab-item" 
                            style={assessmentType === 'Division' ? activeStyle : inactiveStyle} 
                            onClick={() => this.changeAssessmentType("Division")}>Division
                        </h3>
                        <h3 
                            className="assessment-tab-item" 
                            style={assessmentType === 'Addition' ? activeStyle : inactiveStyle} 
                            onClick={() => this.changeAssessmentType("Addition")}>Addition
                        </h3>
                        <h3 
                            className="assessment-tab-item" 
                            style={assessmentType === 'Subtraction' ? activeStyle : inactiveStyle} 
                            onClick={() => this.changeAssessmentType("Subtraction")}>Subtraction
                        </h3>
                    </nav>
                </section>
                    <StudentGrades assessmentType={this.state.assessmentType}/>
            </div>
            )
        }
    }
}
function mapStateToProps(state) {
    let {classroomList, classroom} = state;
    return {
        classroom,
        classroomList
    }
}
export default withRouter(connect(mapStateToProps)(Gradebook))
