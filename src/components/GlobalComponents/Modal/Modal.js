import React, { Component } from 'react'
import { connect } from 'react-redux'
import './modal.css'
import '../../../globalcss/alerts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { setClassroomList, setTeacherList } from '../../../ducks/reducer'
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import AddButton from './modal-items/AddButton';
import Breadcrumbs from './modal-items/Breadcrumbs'
import AddStudent from './AddStudent';
import grades from '../../../assets/data/grades'
import mathAssessments from '../../../assets/data/mathAssessments'

class Modal extends Component {
    state = {
        activeCrumb: 0
    }
   
    toggleModalOff = () => {
        this.setState({ activeCrumb: 0 })
        this.props.resetState();
    }
    
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addClassroom();
        }
    } 
    nextPage = () => {
        if (this.state.activeCrumb < this.props.screens - 1) {
            this.setState({ activeCrumb: this.state.activeCrumb + 1 })
        }
    }
    prevPage = () => {
        if (this.state.activeCrumb > 0) {
            this.setState({ activeCrumb: this.state.activeCrumb - 1 })
        }
    }


    componentSwitch = () => {

        let { itemObj, addName, handleChange, handleCheckbox } = this.props;
        switch(addName) {
            case("Classroom") :
                return <AddClassroom 
                    handleChange={handleChange}       
                    /> 
            case("Teacher") :
                return <AddTeacher 
                    handleChange={handleChange} 
                    activeCrumb={this.state.activeCrumb}
                    handleCheckbox={handleCheckbox}
                    teacherState={itemObj}
                    items={grades}
                    />
            case("Student") :
                return <AddStudent
                    handleChange={handleChange}
                    activeCrumb={this.state.activeCrumb}
                    handleCheckbox={handleCheckbox}
                    studentState={itemObj}
                    items={mathAssessments}
                    />
            default :
                return <div>Internal Error - Please Contact Web Support with Error #A1111</div>
        }
    }
    

    render() {
        let { screens, modalToggle, addName, addFn } = this.props;
        return (
           <div onKeyDown={(e) => this.handleEnter(e)}>
               {modalToggle ? <div>
                <div className="modal-screen-dimmer"></div>
                <div className="modal">
                    <FontAwesomeIcon 
                        style={{margin: "20px"}}
                        icon={faTimesCircle} 
                        className="close-button"
                        onClick={() => this.toggleModalOff()}
                    />
                 <section className="modal-body">
                 
                {this.componentSwitch()}
            
                {screens <= 1 ? 
                    <span className="breadcrumb-wrapper">
                        <AddButton 
                            fn={addFn} 
                            addName={addName} />
                    </span> 
                    :
                        <Breadcrumbs 
                            active={this.state.activeCrumb} 
                            crumbs={screens}
                            nextPage={this.nextPage}
                            prevPage={this.prevPage}
                            addFn={addFn}
                            listCategory={addName}
                        />
                }
                </section>
                </div>
            </div> : ''}
           </div>
        )
    }
}
function mapStateToProps(state) {
    let { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps, { setClassroomList, setTeacherList })(Modal)