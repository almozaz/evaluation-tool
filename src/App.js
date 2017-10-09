import React, { Component } from 'react';
import './App.css';
import ClassContainer from './components/classes/ClassContainer'
import StudentContainer from './components/students/StudentContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassContainer />
        <hr />
        <StudentContainer />
      </div>
    );
  }
}

export default App;
