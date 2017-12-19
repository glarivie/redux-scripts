import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

import {
  App,
  Home,
  Page404,
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="404" component={Page404} />
    <Redirect from="*" to="404" />
  </Route>
)
