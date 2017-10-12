import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';

import getRandom from '../../actions/students/getRandom'

class RandomStudent extends PureComponent {
  getStudent(){
    this.props.getRandom(this.props._id)
  }

  render() {
    return (
      <div>
      <button onClick={this.getStudent.bind(this)}>Ask a question</button>
      </div>
    )
  }
}

const mapStateToProps = ({ randomStudent }) => ({ randomStudent })

export default connect(mapStateToProps, { getRandom, push })(RandomStudent)
