import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, history } from 'react-router'

// Main stylesheets
import './styles/index.css'

import store from './configureStore'
import router from './router'

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={router}
    />
  </Provider>,
  document.getElementById('root')
)
