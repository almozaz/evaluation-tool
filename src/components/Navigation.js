import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../actions/users/sign-out'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className="navigation">

          <Link to="/">Home</Link>
          <br />
            { signedIn ?
              <a href="#" onClick={this.signOut.bind(this)}>Sign out</a> :
              <Link to="/sign-in">Sign in</Link>
            }


      </nav>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  signedIn: (!!user && !!user._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
