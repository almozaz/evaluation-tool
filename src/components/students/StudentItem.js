import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class StudentItem extends PureComponent {

  render() {
    return (
      <div>
      <h3><Link to={`/evaluation`}>this.props.name</Link></h3>
      </div>
    )
  }
}
export default StudentItem
