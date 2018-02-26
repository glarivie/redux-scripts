import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, Page404 } from 'containers'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/404" component={Page404} />
    <Route component={Page404} />
  </Switch>
)

export default Router
