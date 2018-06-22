import React, {Component} from 'react'
import { connect } from 'react-redux'
import './gradebook.css'


class Gradebook extends Component {
    
render() {
    console.log(this.props)
        return (
           <div id="gradebook-wrapper">
            Gradebook
           </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        state,
    }
}
export default connect(mapStateToProps)(Gradebook)