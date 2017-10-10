import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class classItem extends PureComponent {

  render() {
    return (
      <div>
      <h3><Link to={`/class`}>Batch 1</Link></h3>
      <h3><Link to={`/class`}>Batch 2</Link></h3>
      </div>
    )
  }
}
export default classItem
