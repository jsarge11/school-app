import React, { Component } from 'react' 
import Crumbs from './Crumbs'
import AddButton from './AddButton'
export default class BreadCrumbs extends Component {
  state = {

  }
  
  componentSwitch = (crumbsArr) => {
    let { crumbs, active, addFn, nextPage, prevPage, listCategory } = this.props;
    console.log(crumbs, active);
    if (crumbs === active + 1) {
      return <span className="add-teacher-wrapper">
          <button className="modal-button" disabled={active === 0} onClick={() => prevPage()}>Prev</button>
          <AddButton fn={addFn} addName={listCategory}/>
        </span>
    }
    else {
      return  <span className="breadcrumb-wrapper">
        <button className="modal-button" disabled={active === 0} onClick={() => prevPage()}>Prev</button>
        {crumbsArr}
        <button className="modal-button" disabled={active === crumbs - 1} onClick={() => nextPage()}>Next</button> <br/>
      </span>
    }
  }
  render() {
    let { crumbs, active } = this.props;

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
     this.componentSwitch(crumbsArr)
    )
  }
}