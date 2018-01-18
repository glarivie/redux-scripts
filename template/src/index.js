import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// Main stylesheets
import '@/styles/index.css'

import { Router } from 'containers'
import store from '@/store'
import history from '@/history'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
