import React from 'react'
import './problemsets.css'
import Problem from './Problem/Problem';


export default function ProblemSets(props) {
    return (
       <div id="problem-set-wrapper">
            <Problem first_number={12} second_number={3} operator={'-'} />
            <Problem first_number={11} second_number={11} operator={'+'} />
            <Problem first_number={12} second_number={12} operator={'*'} />
            <Problem first_number={121} second_number={10} operator={'/'} />
       </div>
    )
}