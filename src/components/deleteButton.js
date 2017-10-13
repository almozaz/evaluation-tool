import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import FlatButton from 'material-ui/FlatButton';


class deleteButton extends PureComponent {
  render() {

    return (
      <div>
      <FlatButton label="Delete" onClick={this.props.handleClick.bind(this)}/>
      </div>
    )
  }
}


export default(deleteButton)
