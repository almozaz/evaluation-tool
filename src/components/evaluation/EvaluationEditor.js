import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import createEvaluation from '../../actions/evaluation/create'


class EvaluationEditor extends PureComponent {
  constructor(props) {
    super(props)

    const { day, grade, remarks, studentId } = props

    this.state = {
      day: null,
      grade,
      remarks: '',
      errors: {}
    }
  }

  updateDay = (event, date) => {
    this.setState({
      day: date,
    });
  };

  updateGrade(event) {
    this.setState({
      grade: event.target.value
    })
  }

  updateRemarks(event) {
    this.setState({
      remarks: event.target.value
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
    return true
  }

  saveEvaluation() {

    if (!this.validate()) return

    const {
      day,
      grade,
      remarks,
    } = this.state

    const newEvaluation = {
      day,
      grade,
      remarks,
      studentId: this.props.params.studentId,
    }

    this.props.save(newEvaluation)

    this.setState({
      day: null,
      grade: '',
      remarks: '',
    })
  }

  render() {
    const { errors } = this.state
    const styles = {
      block: {
        maxWidth: 25,
      },
      radioButton: {
        marginBottom: 16,
      },
    };
    const style = {
      marginRight: 20,
    };

    return (
      <div className="editor">
        <h4>Add evaluation</h4>

        <DatePicker
          className="day"
           hintText="Day"
           value={this.state.day}
           onChange={this.updateDay}
         />

        { errors.title ? <small className="error">{errors.title}</small> : null }
        <RadioButtonGroup name="grade" value={this.state.grade} onChange={this.updateGrade.bind(this)}>
          <RadioButton
             value={1}
             label="Red"
             style={styles.radioButton}
           />
           <RadioButton
              value={2}
              label="Yellow"
              style={styles.radioButton}
            />
            <RadioButton
               value={3}
               label="Green"
               style={styles.radioButton}
             />
        </RadioButtonGroup>

        <TextField
          className="remarks"
          hintText="Remarks"
          value={this.state.remarks}
          onChange={this.updateRemarks.bind(this)}
        /><br />

        <div className="actions">
          <FloatingActionButton style={style} mini={true} onClick={this.saveEvaluation.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = { save: createEvaluation }

export default connect(null, mapDispatchToProps)(EvaluationEditor)
