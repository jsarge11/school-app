import React from 'react'


const StudentRow = props => {
 let scoreArr = props.item.data;
 let name = '';
 if (scoreArr[0]) {
   name = scoreArr[0].name;
 }
 let displayScores = scoreArr.map((item, i) => {
  return (
   <span className="box-holder" key={i}>
    <em><p className="student-date">{item.date_taken}</p></em>
    <div className="student-box">
    {item.score}
    </div>
   </span>
  )
 })

 return (
  <span className="row-wrapper">
   {displayScores[0] ? 
    <div className="student-row">
     {displayScores} 
   </div>
   : ''}
   </span>
 )
}
export default StudentRow