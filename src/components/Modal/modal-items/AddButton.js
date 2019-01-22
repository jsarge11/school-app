import React from 'react'


const AddButton = props => {
return (
 <div className="modal-button" onClick={() => props.fn()}> 
  Add {props.addName} 
 </div>
 )
}
export default AddButton