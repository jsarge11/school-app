import React from 'react'
import Checkbox from './Checkbox';

export default function CheckboxList(props) {
    return (
        <span className="modal-radio">
            <div className="grade-wrapper">
                <Checkbox grade="K" />
                <Checkbox grade="1st" />
                <Checkbox grade="2nd" />
                <Checkbox grade="3rd" />
                <Checkbox grade="4th" />
                <Checkbox grade="5th" />
                <Checkbox grade="6th" />
                <Checkbox grade="7th" />
                <Checkbox grade="8th" />
                <Checkbox grade="9th" />
                <Checkbox grade="10th" />
                <Checkbox grade="11th" />
                <Checkbox grade="12th" />
            </div>
        </span>
    )
}