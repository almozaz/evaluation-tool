import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import StudentItem from './StudentItem'
import StudentEditor from './StudentEditor'
import RandomStudent from './RandomStudent'

import fetchClasses from '../../actions/classes/fetch'
import fetchStudents from '../../actions/students/fetch'

class StudentsContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchClasses()
  }

  renderStudents() {
    const { students } = this.props
    if (!students) return null
    if (students.length > 1) return (
      students.map(function(student, index){
        return <StudentItem
          key={index} { ...student } />
      })
    )
    return (<StudentItem { ...students } />)
  }

  render() {
    return (
      <div className="batch page">
       <header>
         <h1>Batch {this.props.batch}</h1>
       </header>

       <main>
        <RandomStudent {...this.props} />
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
