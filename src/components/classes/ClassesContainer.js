import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../../actions/classes/fetch'

import ClassItem from './ClassItem'
import ClassEditor from './ClassEditor'

class ClassesContainer extends PureComponent {

  componentWillMount() {
    this.props.fetchClasses()
  }

  renderClass(batch, index) {
    return <ClassItem
      key={index} { ...batch } />
  }

  render() {
    return (
      <div className="classes wrapper">
       <header>
         <h1>All classes</h1>
       </header>

       <main>
        { this.props.classes.map(this.renderClass.bind(this)) }
        <ClassEditor />
       </main>
     </div>
    );
  }
}

const mapStateToProps = ({ classes }) => ({ classes })

export default connect(mapStateToProps, { fetchClasses })(ClassesContainer)
