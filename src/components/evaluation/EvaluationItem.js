import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class EvaluationItem extends PureComponent {

  render() {
    return (
      <div>
      <h3>Daily Evaluation</h3>
      </div>
    )
  }
}
export default connect(null, null)(EvaluationItem)
