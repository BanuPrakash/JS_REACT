import React, { Component } from 'react'

export default class CustomerRow extends Component {
  deleteRow(id) {
    console.log(id);
    this.props.delEvent(id);
  }

  render() {
    let {id, firstName, lastName} = this.props.customer;
    return (
      <div className='row'>
            {firstName}, {lastName} &nbsp; &nbsp;
            <button type="button" onClick={() => this.deleteRow(id)}>
              Delete
            </button> 
            {/* <button type="button" onClick={this.deleteRow}>Delete</button> */}
      </div>
    )
  }
}

