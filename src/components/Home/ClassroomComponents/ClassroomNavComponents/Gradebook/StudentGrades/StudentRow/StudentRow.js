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
  <div>
   {displayScores[0] ? 
    <div className="student-row">
     {displayScores} 
   </div>
   : ''}
   </div>
 )
}
export default StudentRow