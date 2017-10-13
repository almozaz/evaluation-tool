import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';


class deleteButton extends PureComponent {
  render() {

    return (
      <div>
      <button onClick={this.props.handleClick.bind(this)}>Delete</button>
      </div>
    )
  }
}


export default(deleteButton)
