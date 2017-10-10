import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import createBatch from '../../actions/classes/create'

class BatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { batch, startDate, endDate } = props

    this.state = {
      batch: batch || '',
      startDate,
      endDate,
      errors: {}
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      batch: event.target.value
    })
  }

  updateStartDate(event) {
    this.setState({
      startDate: event.target.value
    })
  }

  updateEndDate(event) {
    this.setState({
      endDate: event.target.value
    })
  }

  validate() {
    const isTitleValid = this.validateTitle()

    this.setState({
      errors: {
        title: isTitleValid ? null : 'The title can not be blank!',
      }
    })
    return isTitleValid
  }

  validateTitle() {
    const { batch } = this.state
    return batch && batch.length > 0
  }

  saveBatch() {
    if (!this.validate()) return

    const {
      batch,
      startDate,
      endDate,
    } = this.state

    const newBatch = {
      batch,
      startDate,
      endDate,
    }

    this.props.save(newBatch)

    this.setState({
      batch: '',
      startDate: null,
      endDate: null,
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Batch Number"
          value={this.state.title}
          onChange={this.updateTitle.bind(this)} />

        { errors.title ? <small className="error">{errors.title}</small> : null }

        <input
          type="date"
          ref="startDate"
          className="startDate"
          placeholder="Photo URL"
          value={this.state.startDate}
          onChange={this.updateStartDate.bind(this)} />

        <input
          type="date"
          ref="endDate"
          className="endDate"
          value={this.state.endDate}
          onChange={this.updateEndDate.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createBatch }

export default connect(null, mapDispatchToProps)(BatchEditor)
