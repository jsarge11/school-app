import React, { Component } from 'react'
import LandingNav from './LandingNav/LandingNav'
import './landing.css'
// import axios from 'axios'

export default class Landing extends Component {
state = {
  quoteArray: [],
  opacity: 0
}
// CORS ERROS - not working
// componentDidMount() {
//   axios.get('https://talaikis.com/api/quotes/').then(res => {
//     this.setState({ quoteArray: res.data, opacity: 1})
//   })
// }
render() {
   let quoteArray = this.state.quoteArray.filter(item => {
     return item.cat === 'teacher' || item.cat === 'education';
   })
   let number = Math.floor(Math.random() * quoteArray.length);
   return (
     <div id="landing-wrapper">
      <LandingNav />
      <div id="quote-wrapper" style={{opacity: this.state.opacity}}>
        <p id="landing-quote">

          {quoteArray[number] ? quoteArray[number].quote : ''}
        </p>
        <p id="landing-author">
         {quoteArray[number] ? quoteArray[number].author : ''}
        </p>
      </div>
     </div>
    )
   }
  }