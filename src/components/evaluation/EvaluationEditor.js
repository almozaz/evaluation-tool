import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import createEvaluation from '../../actions/evaluation/create'


class EvaluationEditor extends PureComponent {
  constructor(props) {
    super()

    const { day, grade, studentId } = props

    this.state = {
      day,
      grade,
      errors: {}
    }
  }

  updateDay(event) {
    this.setState({
      day: event.target.value
    })
  }

  updateGrade(event) {
    this.setState({
      grade: event.target.value
    })
  }

  validate() {
    const isDayValid = this.validateDay()

    this.setState({
      errors: {
        title: isDayValid ? null : 'The date can not be blank!',
      }
    })
    return isDayValid
  }

  validateDay() {

  }

  saveEvaluation() {

    if (!this.validate()) return

    const {
      day,
      grade,
    } = this.state

    const newEvaluation = {
      day,
      grade,
      studentId: this.props._id,
    }

    this.props.save(newEvaluation)

    this.setState({
      day: '',
      grade: '',
    })
  }

  render() {
    const { errors } = this.state
    debugger;

    return (
      <div className="editor">
        <input
          type="date"
          ref="day"
          className="day"
          value={this.state.day}
          onChange={this.updateDay.bind(this)} />

        { errors.title ? <small className="error">{errors.title}</small> : null }

        <input
          type="number"
          ref="grade"
          className="grade"
          placeholder=""
          value={this.state.grade}
          onChange={this.updateGrade.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveEvaluation.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createEvaluation }

export default connect(null, mapDispatchToProps)(EvaluationEditor)
