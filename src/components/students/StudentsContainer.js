import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import StudentItem from './StudentItem'
import StudentEditor from './StudentEditor'
import RandomStudent from './RandomStudent'
import DeleteButton from './../deleteButton'

import fetchClasses from '../../actions/classes/fetch'
import fetchStudents from '../../actions/students/fetch'
import deleteClass from '../../actions/classes/delete'

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

  delete(){
    console.log('delete')
    this.props.deleteClass(this.props._id)
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
        <DeleteButton handleClick={this.delete} {...this.props} />
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

export default connect(mapStateToProps, { fetchClasses, fetchStudents, deleteClass })(StudentsContainer)
