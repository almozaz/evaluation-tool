import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import createStudent from '../../actions/students/create'

class StudentEditor extends PureComponent {
  constructor(props) {
    super(props)

    const { name, photo, classId } = props

    this.state = {
      name: '',
      photo: '',
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
    const style = {
      marginRight: 20,
    };

    return (
      <div className="editor">
      <TextField
      hintText="Student name"
      value={this.state.name}
      onChange={this.updateName.bind(this)}
      /><br />

      { errors.title ? <small className="error">{errors.title}</small> : null }

      <TextField
        hintText="https://www.cloudinary.jhfdjkldsfkjl.jpg"
        floatingLabelText="Link to photo"
        value={this.state.photo}
        onChange={this.updatePhoto.bind(this)}
      /><br />

      <div className="actions">
        <FloatingActionButton style={style} mini={true} onClick={this.saveStudent.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createStudent }

export default connect(null, mapDispatchToProps)(StudentEditor)
