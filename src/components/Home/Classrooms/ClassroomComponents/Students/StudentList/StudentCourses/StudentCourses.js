import React from 'react'
import './studentcourses.css'


export default function StudentCourses(props) {
    let { courses } = props;
    let courseList;

    if (courses) {
        courseList = courses.map((item, i) => {
            let name = '';
            switch(item) {
                case(1) : name = 'Multiplication'
                    break;
                case(2) : name = 'Division'
                    break;
                case(3) : name = 'Addition'
                    break;
                case(4) : name = 'Subtraction'
                    break;
                default :
                name = ''
            }
            return(
                <div key={item + i}>
                    {name}
                </div>
            )
        })
    }
    else {
        courseList = <div><em>none</em></div>;
    }

    return (
       <div id="studentcourses-wrapper">
        <p> Current Assessments: </p>
        {courseList}
       </div>
    )
}