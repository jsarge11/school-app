import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setClassroom } from '../../../../../ducks/reducer'
import './listitem.css'

class ListItem extends Component {
    state = {
        classroomEdit: false,
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }
    handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.setState({ classroomEdit: false })
        }
    }

    handleSubmit = () => {
        let { classroom } = this.props;
        this.props.editClassroomName(classroom.clsr_id);
        this.setState({ classroomEdit: false })
    }

    render() {
        let { classroom } = this.props;
        return (
            <article className="item-wrapper">
                {!this.state.classroomEdit ?
                    <div className="item-name-wrapper">
                        <section className="item-name-text-wrapper">
                            <p> Classroom Name: </p> &nbsp;
            <Link onClick={() => this.props.setClassroom(classroom)} to={`/classrooms/gradebook`}>
                                <span className="classroom-name">{classroom.name}</span>
                            </Link>
                        </section>
                        &nbsp;
           <button className="item-button" onClick={() => this.setState({ classroomEdit: true })}> Edit</button>
                    </div>
                    :
                    <div className="item-name-wrapper">
                        <p> Classroom Name: </p>
                        <section className="edit-wrapper">
                            <input type="text"
                                onKeyPress={(e) => this.handleEnter(e)}
                                onKeyDown={(e) => this.handleEscape(e)}
                                onChange={(e) => this.props.handleChange("newName", e)}
                            />
                            <button className="item-button" onClick={() => this.handleSubmit()}> Submit </button>
                            <button className="item-button" onClick={() => this.setState({ classroomEdit: false, classroomName: '' })}> Exit </button>
                        </section>

                    </div>
                }
                <p className="item-button" onClick={() => this.props.deleteClassroom(classroom.clsr_id)}>Delete</p>
            </article>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
export default connect(mapStateToProps, { setClassroom })(ListItem)