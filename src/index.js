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

import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ClassesContainer} />
        <Route path="/classes/:classId" component={StudentsContainer} />
        <Route path="/students/:studentId" component={EvaluationContainer} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
