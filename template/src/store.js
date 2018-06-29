import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'

import { requestMiddleware } from 'middlewares'
import { is } from 'helpers'
import reducers from 'reducers'
import history from '@/history'

const { devToolsExtension } = window

const store = createStore(
  connectRouter(history)(reducers),
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
  module.hot.accept('reducers', () => store.replaceReducer(connectRouter(history)(reducers)))

export default store
