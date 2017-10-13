import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          { this.props.children }
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
