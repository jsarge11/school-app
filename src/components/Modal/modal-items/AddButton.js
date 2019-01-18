import React from 'react'


const AddButton = props => {
return (
 <div className="modal-button" onClick={() => this.props.toggleModal()}> 
  Add {props.addName} 
 </div>
 )
}
export default AddButton