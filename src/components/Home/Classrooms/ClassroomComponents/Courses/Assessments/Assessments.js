import React, {Component} from 'react'
import './assessments.css'
import Axios from 'axios';


export default class Assessments extends Component {
    state = {
        assessments: []
    }
    componentDidMount() {
        Axios.get('/math/assessments?id=' + this.props.match.params.id).then(res => {
            this.setState({ assessments: res.data})
        })
    }
render() {
        let assessments = this.state.assessments.map(item => {
            return (
                <div key={item.a_id} className="assessment-item-wrapper">
                    {item.name} <br/>
                </div>
            )
        })
        return (
        <div id="assessment-wrapper">
            {assessments}
        </div>
        )
    }

}
