import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Main stylesheets
import './styles/index.css'

import store from './configureStore'
import router from './router'
import browserHistory from './browserHistory'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={router}
    />
  </Provider>,
  document.getElementById('root')
)
