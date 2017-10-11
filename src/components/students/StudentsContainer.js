import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StudentItem from './StudentItem'
import StudentEditor from './StudentEditor'

import fetchClasses from '../../actions/classes/fetch'
import fetchStudents from '../../actions/students/fetch'

class StudentsContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchClasses()
  }

  renderStudents() {
    if (!this.props.students) return null
    return this.props.students.map(function(student, index){
      return <StudentItem
        key={index} { ...student } />
    })
  }

  render() {
    return (
      <div className="batch page">
       <header>
         <h1>Batch {this.props.batch}</h1>
       </header>

       <main>
        { this.renderStudents() }
        <StudentEditor {...this.props} />
       </main>
     </div>
    );
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
    ...currentClass,
  }
}

export default connect(mapStateToProps, { fetchClasses, fetchStudents })(StudentsContainer)
