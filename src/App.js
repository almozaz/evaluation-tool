import React, { Component } from 'react'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        { this.props.children }
      </div>
    )
  }
}

export default App;
