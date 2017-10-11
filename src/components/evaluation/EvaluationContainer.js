import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import EvaluationItem from './EvaluationItem'
import EvaluationEditor from './EvaluationEditor'

import fetchStudents from '../../actions/students/fetch'

class EvaluationContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div className="evaluation wrapper">
       <header>
         <h1>{ this.props.name }</h1>
       </header>

       <main>
        <EvaluationItem />
        <EvaluationEditor {...this.props} />
       </main>
     </div>
    );
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const currentStudent = students.reduce((prev, next) => {
    if (next._id.toString() === params.studentId) {
      return next
    }
    return prev
  }, {})
  return {
    ...currentStudent,
  }
}

export default connect(mapStateToProps, { fetchStudents })(EvaluationContainer)
