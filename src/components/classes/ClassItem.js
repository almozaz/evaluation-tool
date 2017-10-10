import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class classItem extends PureComponent {

  render() {
    return (
      <div>
      <h3><Link to={`/class`}>Batch {this.props.batch}</Link></h3>
      </div>
    )
  }
}

export default connect(null, null)(classItem)
