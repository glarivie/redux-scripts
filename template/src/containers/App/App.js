import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { get, debounce } from 'lodash'

import { mapDispatchToProps } from 'helpers'
import { Router } from 'containers'
import { types, initialValues } from 'constants'

import styles from './App.scss'

class App extends Component {
  static propTypes = {
    location: types.location,
    dimensions: types.dimensions,
    actions: types.actions,
  }

  componentDidMount = () => {
    this._debounceUpdate()
    window.addEventListener('resize', this._debounceUpdate)
  }

  componentWillUnmount = () =>
    window.removeEventListener('resize', this._debounceUpdate)

  _updateAppDimensions = () => {
    const { actions } = this.props
    const { width } = document.body.getBoundingClientRect()

    actions.app.updateAppDimensions({ width, height: window.screen.height })
  }

  _debounceUpdate = debounce(this._updateAppDimensions, 250)

  render = () => (
    <div className={styles.App} ref={c => this._app = c}>
      <Router />
    </div>
  )
}

const mapStateToProps = ({ app, router }) => ({
  dimensions: get(app, 'dimensions', initialValues.dimensions),
  location: get(router, 'location', initialValues.location),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
