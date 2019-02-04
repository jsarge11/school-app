import React from 'react'
import './crumbs.css'

const Crumbs = props => {
  let style = {
    background: 'lightgrey'
  }
return (
  <span style={props.active ? style : {}} className="crumb-item">&nbsp;</span>
 )
}
export default Crumbs