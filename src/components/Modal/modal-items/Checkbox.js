import React from 'react'

const Checkbox = props => {
return (
 <label className="input-item checkbox-item">
  <input type="checkbox" value={props.grade}/>
  <p className="checkbox-p">{props.grade}</p>
 </label>  
 )
}
export default Checkbox