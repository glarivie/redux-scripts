import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import reducers from 'reducers'
import history from '@/history'

const { devToolsExtension } = window
const isDevelopment = process.env.NODE_ENV === 'development'

const store = createStore(
  reducers,
  undefined, // Initial state
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
    ),
    devToolsExtension && isDevelopment ? devToolsExtension() : f => f,
  ),
)

// Enable Webpack hot module replacement for reducers
if (module.hot)
  module.hot.accept('reducers', () => store.replaceReducer(reducers))

export default store
