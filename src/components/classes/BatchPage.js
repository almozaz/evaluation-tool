import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchClasses from '../../actions/classes/fetch'

export class BatchPage extends PureComponent {

  componentWillMount() {
    this.props.fetchClasses()
  }

  render() {
    return(
      <div className="batch page">
        <h1>Batch {this.props.batch}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ classes }, { params }) => {
  const currentClass = classes.reduce((prev, next) => {
    if (next._id.toString() === params.classId) {
      return next
    }
    return prev
  }, {})
  return {
    ...currentClass
  }
}

export default connect(mapStateToProps, { fetchClasses })(BatchPage)
