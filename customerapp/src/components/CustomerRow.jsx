import React, { Component } from 'react'

export default class CustomerRow extends Component {
  render() {
    let {id, firstName, lastName} = this.props.customer;
    return (
      <div className='row'>
            {firstName}, {lastName}
      </div>
    )
  }
}

