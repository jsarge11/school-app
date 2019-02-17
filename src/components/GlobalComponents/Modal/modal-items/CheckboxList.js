import React from 'react'
import Checkbox from './Checkbox';

export default function CheckboxList(props) {
    let { handleCheckbox, objectState, items, description } = props;
    let checkboxDisplay = items.map(item => {
        return <Checkbox key={item} objectState={objectState} handleCheckbox={handleCheckbox} item={item} />
    })
    return (
        <span className="modal-radio">
        <p>{description}</p>
            <div className="grade-wrapper">
               {checkboxDisplay}
            </div>
        </span>
    )
}