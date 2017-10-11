import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import createStudent from '../../actions/students/create'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, photo, classId } = props

    this.state = {
      name,
      photo,
      errors: {}
    }
  }

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: event.target.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: event.target.value
    })
  }

  validate() {
    const isNameValid = this.validateName()

    this.setState({
      errors: {
        title: isNameValid ? null : 'The name can not be blank!',
      }
    })
    return isNameValid
  }

  validateName() {
    const { name } = this.state
    return name && name.length > 0
  }

  saveStudent() {

    if (!this.validate()) return

    const {
      name,
      photo,
    } = this.state

    const newStudent = {
      name,
      photo,
      classId: this.props._id,
    }

    this.props.save(newStudent)

    this.setState({
      name: '',
      photo: '',
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Student name"
          value={this.state.name}
          onChange={this.updateName.bind(this)} />

        { errors.title ? <small className="error">{errors.title}</small> : null }

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Student photo"
          value={this.state.photo}
          onChange={this.updatePhoto.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createStudent }

export default connect(null, mapDispatchToProps)(StudentEditor)
