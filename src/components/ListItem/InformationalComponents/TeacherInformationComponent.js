import React from 'react'
import './teacherlist.css'

const TeacherInformationComponent = props => {
  let { item } = props;
  let grades = "none";
      if (item.grades) {
          grades = item.grades.map(grade => {
              return(`${grade} `)
          })
      }
      return (
          <section key={item.id} className="item-name-text-wrapper">
              <span id="teacher-info-wrapper"> 
                  <p className="teacher-info-item-wrapper"><strong>Name:&nbsp; </strong> <em>{item.name}</em>  </p>
                  <p className="teacher-info-item-wrapper"><strong>Grades Taught:&nbsp; </strong> <em>{grades}</em> </p>
                  <p className="teacher-info-item-wrapper"><strong>Email:&nbsp; </strong><em>{item.email}</em> </p>
              </span>
          </section>
      )
}
export default TeacherInformationComponent