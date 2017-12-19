import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from 'reducers'

const { devToolsExtension } = window
const isDevelopment = process.env.NODE_ENV === 'development'

const store = createStore(
  rootReducer,
  undefined, // Initial state
  compose(
    applyMiddleware(thunkMiddleware),
    devToolsExtension && isDevelopment ? devToolsExtension() : f => f,
  ),
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

export default store
