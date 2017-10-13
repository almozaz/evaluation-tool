import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';

import getRandom from '../../actions/students/getRandom'

class RandomStudent extends PureComponent {
  getStudent(){
    this.props.getRandom(this.props._id)
  }

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div>
      <RaisedButton
      label="Ask a random student"
      primary={true}
      style={style}
      onClick={this.getStudent.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = ({ randomStudent }) => ({ randomStudent })

export default connect(mapStateToProps, { getRandom, push })(RandomStudent)
