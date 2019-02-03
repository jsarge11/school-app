import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setClassroom } from '../../ducks/reducer'
import './listitem.css'

class ListItem extends Component {
    state = {
        editToggle: false,
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }
    handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.setState({ editToggle: false })
        }
    }

    handleSubmit = () => {
        let { item } = this.props;
        this.props.editFn(item.id);
        this.setState({ editToggle: false })
    }

    render() {
        let { item } = this.props;
        console.log(this.props);
        return (
            <article className="item-wrapper">
                {!this.state.editToggle ?
                    <div className="item-name-wrapper">
                        {this.props.InformationalComponent}
                        &nbsp;
                        {/* nested ternary alert */}
                        {this.props.editFn ? <button className="item-button" onClick={() => this.setState({ editToggle: true })}> Edit </button> : ''}
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
                            <button className="item-button" onClick={() => this.setState({ editToggle: false, classroomName: '' })}> Exit </button>
                        </section>

                    </div>
                }
                {!item.principal ?<p className="item-button" onClick={() => this.props.deleteFn(item.id)}>Delete</p> : ''}
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