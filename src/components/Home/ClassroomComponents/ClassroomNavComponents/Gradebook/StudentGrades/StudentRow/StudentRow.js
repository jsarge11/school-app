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
    <React.Fragment>
      <span className="row-wrapper">
          <div className="student-row">
            <h2>Student: </h2>
            <span className="student-name">{props.name}</span>
            {displayScores[0] ? displayScores : <em>No assignments recorded.</em>}
          </div>
      </span>
    </React.Fragment>
  )
}
export default StudentRow