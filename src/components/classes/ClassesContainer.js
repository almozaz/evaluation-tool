import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../../actions/classes/fetch'

import ClassItem from './ClassItem'
import ClassEditor from './ClassEditor'
import DeleteButton from './../deleteButton'

class ClassesContainer extends PureComponent {

  componentWillMount() {
    this.props.fetchClasses()
  }

  renderClass(batch, index) {
    return <ClassItem
      key={index} { ...batch } />
  }

  deleteClass(){
    console.log('delete')
    debugger
    this.props.deleteClass()
  }

  render() {
    if (!this.props.classes) return null
    if (!this.props.user) return (
      <div>
        <h2>Sign in to access your classes!</h2>
      </div>
    )

    return (
      <div className="classes wrapper">
       <header>
         <h1>All classes</h1>
       </header>

       <main>
        { this.props.classes.map(this.renderClass.bind(this)) }
        <hr />
        <h4>Add new batch</h4>
        <ClassEditor />
       </main>
     </div>
    );
  }
}

const mapStateToProps = ({ classes, user }) => ({ classes, user })

export default connect(mapStateToProps, { fetchClasses })(ClassesContainer)
