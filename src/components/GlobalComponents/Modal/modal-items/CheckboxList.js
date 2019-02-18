import React from 'react'
import Checkbox from './Checkbox';

export default function CheckboxList(props) {
    let { handleCheckbox, objectState, items, description, listType } = props;
    let checkboxDisplay = items.map(item => {
        return <Checkbox key={item} objectState={objectState} handleCheckbox={handleCheckbox} item={item} listType={listType} />
    })
    return (
        <span className="modal-radio">
        <p>{description}</p>
            <div className={`${listType}-wrapper`}>
               {checkboxDisplay}
            </div>
        </span>
    )
}