import React from 'react'
import './problem.css'

export default class Problem extends React.Component {

  state = {
    answer: 0,
    user_answer: ''
  }
  componentDidMount() {
    this.calculate();
  }

  handleChange = (field, e) => {
    this.setState({ [`${field}`]: e.target.value })
  }
  checkAnswer = (e) => {
   if (e.keyCode === 13) {
     if (+this.state.answer === +this.state.user_answer) {
       console.log('correct');
     }
     else {
       console.log('incorrect');
     }
   }
  }

  calculate() {
    let answer;
    switch(this.props.operator) {
      case('+') :
        answer = this.props.first_number + this.props.second_number;
        break;
      case('-') :
        answer = this.props.first_number - this.props.second_number;
        break;
      case('*') :
        answer = this.props.first_number * this.props.second_number;
        break;
      case('/') :
        answer = this.props.first_number / this.props.second_number;
        break;
      default :
        answer = 0;
    }
    this.setState({ answer: answer })
  }

  render() {
   return (
      <div id="outer-problem-creator">
        <div id="first-number">{this.props.first_number}</div>
          <div id="second-number">
            <span>
              {this.props.operator}&nbsp;
              {this.props.second_number}
              <hr />
            </span>
          </div>
          <input id="answer" type="number" onChange={(e)=>this.handleChange("user_answer", e)} value={this.state.user_answer} onKeyUp={(e)=>this.checkAnswer(e)}/>
      </div>
      )
    }
  }