import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// Main stylesheets
import '@/styles/index.css'

import App from '@/containers/App'
import store from '@/store'
import history from '@/history'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// Webpack Hot Module Replacement API
if (module.hot)
  module.hot.accept('@/containers/App', () => render(App))
