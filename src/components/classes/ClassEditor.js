import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import createBatch from '../../actions/classes/create'

class BatchEditor extends PureComponent {
  constructor(props) {
    super(props);

    const { batch, startDate, endDate } = props

    this.state = {
      batch: '',
      startDate: null,
      endDate: null,
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

  updateStartDate = (event, date) => {
    this.setState({
      startDate: date,
    });
  };

  updateEndDate = (event, date) => {
    this.setState({
      endDate: date,
    });
  };

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
    const style = {
      marginRight: 20,
    };

    return (
      <div className="editor">

          <TextField
            value={this.state.title}
            onChange={this.updateTitle.bind(this)}
            className="title"
             hintText=""
             floatingLabelText="Batch Number"
           /><br />

        { errors.title ? <small className="error">{errors.title}</small> : null }

        <DatePicker
           hintText="Start Date"
           value={this.state.startDate}
           onChange={this.updateStartDate}
         />

         <DatePicker
            hintText="End Date"
            value={this.state.endDate}
            onChange={this.updateEndDate}
          />

        <div className="actions">
        <FloatingActionButton style={style} mini={true} onClick={this.saveBatch.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createBatch }

export default connect(null, mapDispatchToProps)(BatchEditor)
