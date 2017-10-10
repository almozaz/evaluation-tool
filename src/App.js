import React, { Component } from 'react';
import './App.css';
import ClassesContainer from './components/classes/ClassesContainer';
import StudentsContainer from './components/students/StudentsContainer';
import EvaluationContainer from './components/evaluation/EvaluationContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassesContainer />
        <hr />
        <StudentsContainer />
        <hr />
        <EvaluationContainer />
      </div>
    );
  }
}

export default App;
