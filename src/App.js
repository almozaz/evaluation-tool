import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Navigation />
          { this.props.children }
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
