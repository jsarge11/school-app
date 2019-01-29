import React from 'react'
import Checkbox from './Checkbox';

let grades = [
    "K",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th"
]

export default function CheckboxList(props) {
    let { handleCheckbox, teacherState } = props;
    let checkboxDisplay = grades.map(item => {
        return <Checkbox key={item} teacherState={teacherState} handleCheckbox={handleCheckbox} grade={item} />
    })
    return (
        <span className="modal-radio">
        <p>Select Grades Taught (if any)</p>
            <div className="grade-wrapper">
               {checkboxDisplay}
            </div>
        </span>
    )
}