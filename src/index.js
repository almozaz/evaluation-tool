import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

import ClassesContainer from './components/classes/ClassesContainer'
import StudentsContainer from './components/students/StudentsContainer'
import EvaluationContainer from './components/evaluation/EvaluationContainer'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ClassesContainer} />
        <Route path="/class" component={StudentsContainer} />
        <Route path="/classes/:classId" component={StudentsContainer} />
        <Route path="/evaluation" component={EvaluationContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
