import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class EvaluationItem extends PureComponent {
  color() {
    switch (this.props.grade) {
      case (1) :
        return 'red'

      case (2) :
        return 'yellow'

      case (3) :
        return 'green'

      default :
        return null
    }
  }

  showRemarks(){
    if (this.props.remarks) return (
      <h4>Remarks: {this.props.remarks}</h4>
    )
  }
  render() {
    return (
      <div>
      <h3>Date: {this.props.day}</h3>
      <h4>Color: { this.color() }</h4>
      {this.showRemarks()}
      </div>
    )
  }
}
export default connect(null, null)(EvaluationItem)
