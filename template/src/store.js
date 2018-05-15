import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import { requestMiddleware } from 'middlewares'
import { is } from 'helpers'
import reducers from 'reducers'
import history from '@/history'

const { devToolsExtension } = window

const store = createStore(
  reducers,
  undefined, // Initial state
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      requestMiddleware,
    ),
    devToolsExtension && is.development ? devToolsExtension() : f => f,
  ),
)

// Enable Webpack hot module replacement for reducers
if (module.hot)
  module.hot.accept('reducers', () => store.replaceReducer(reducers))

export default store
