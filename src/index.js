import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import Example from './Example'
import './index.css'

render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='example' component={Example} />
      </Route>
    </Router>
  ), document.getElementById('root')
)
