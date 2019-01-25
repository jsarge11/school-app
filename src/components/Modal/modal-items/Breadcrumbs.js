import React, { Component } from 'react' 
import Crumbs from './Crumbs'

export default class BreadCrumbs extends Component {
  state = {

  }
  
  render() {
    let { crumbs, nextPage, prevPage, active } = this.props;

    let crumbsArr = [];
    for (let i = 0; i < crumbs; i++) {
      if (active === i) {
        crumbsArr.push(<Crumbs active={true} key={i}/>);
      }
      else {
        crumbsArr.push(<Crumbs active={false} key={i}/>)
      }
    }

    
    return (
    <span className="breadcrumb-wrapper">
      <button className="modal-button" disabled={this.props.active === 0} onClick={() => prevPage()}>Prev</button>
      {crumbsArr}
      <button className="modal-button" disabled={this.props.active === this.props.crumbs - 1} onClick={() => nextPage()}>Next</button>
    </span>
    )
  }
}