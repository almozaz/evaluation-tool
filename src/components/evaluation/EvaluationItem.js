import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class EvaluationItem extends PureComponent {
  color() {
    const redClass ={color: 'red'}
    const yellowClass ={color: 'yellow'}
    const greenClass ={color: 'green'}

    switch (this.props.grade) {
      case (1) :
        return (<h4 className="red" style={redClass}>Red</h4>)

      case (2) :
        return (<h4 className="yellow" style={yellowClass}>Yellow</h4>)

      case (3) :
        return (<h4 className="green" style={greenClass}>Green</h4>)

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
      <p>___________</p>
      <h3>Day: {this.props.day}</h3>
      {this.color()}
      {this.showRemarks()}
      </div>
    )
  }
}
export default connect(null, null)(EvaluationItem)
