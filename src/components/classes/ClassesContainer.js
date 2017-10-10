import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import fetchClasses from '../../actions/classes/fetch'

import ClassItem from './ClassItem'

class ClassesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchClasses()
  }

  render() {
    return (
      <div className="classes wrapper">
       <header>
         <h1>All classes</h1>
       </header>

       <main>
        <ClassItem />
        //link to each class
       </main>
     </div>
    );
  }
}

const mapStateToProps = ({ classes }) => ({ classes })

export default connect(mapStateToProps, { fetchClasses })(ClassesContainer)
