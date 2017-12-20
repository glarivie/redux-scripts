import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

// Main stylesheets
import './styles/index.css'

import store from './configureStore'
import router from './router'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={router} />
  </Provider>,
  document.getElementById('root')
)
