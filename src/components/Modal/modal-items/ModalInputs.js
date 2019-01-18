import React from 'react'

export default function RadioItem(props) {
return (
  <span className="modal-radio">
  <br/>
  <label className="input-item radio-item">
      <input id="radio1" type="radio" name="admin"/>
      <p>Principal</p>
  </label >
  <label className="input-item radio-item">
      <input id="radio2" type="radio" name="admin"/>
      <p>Admin</p>
  </label>
  <label className="input-item radio-item">
      <input id="radio3" type="radio" name="admin"/>
      <p>Teacher</p>
  </label>
  <br/>
  Grade:  
  <div className="grade-wrapper">
      <label className="input-item checkbox-item">
          <input type="checkbox" value="K"/>
          <p>K</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="1st"/>
          <p>1st</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="2nd"/>
          <p>2nd</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="3rd"/>
          <p>3rd</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="4th"/>
          <p>4th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="5th"/>
          <p>5th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="6th"/>
          <p>6th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="7th"/>
          <p>7th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="8th"/>
          <p>8th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="9th"/>
          <p>9th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="10th"/>
          <p>10th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="11th"/>
          <p>11th</p>
      </label>                              
      <label className="input-item checkbox-item">
          <input type="checkbox" value="12th"/>
          <p>12th</p>
      </label>                                             
  </div>
<a className="modal-button"> Add Teacher </a>
</span>
 )
}