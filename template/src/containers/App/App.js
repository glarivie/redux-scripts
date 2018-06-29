import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Flex } from '@hqro/gojji'
import debounce from 'lodash/debounce'
import get from 'lodash/get'

import { connect } from 'helpers'
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
    const { actions } = this.props

    this._debounceUpdate()
    window.addEventListener('resize', this._debounceUpdate)

    return actions.app.detectBrowserLocale()
  }

  componentWillUnmount = () =>
    window.removeEventListener('resize', this._debounceUpdate)

  _updateAppDimensions = () => {
    const { actions } = this.props
    const { width } = document.body.getBoundingClientRect()
    const { height } = window.screen

    return actions.app.updateAppDimensions({ width, height })
  }

  _debounceUpdate = debounce(this._updateAppDimensions, 250)

  render = () => (
    <Flex className={styles.App}>
      <Router />
    </Flex>
  )
}

const mapStateToProps = ({ app, router }) => ({
  dimensions: get(app, 'dimensions', initialValues.dimensions),
  location: get(router, 'location', initialValues.location),
})

export default withRouter(connect(mapStateToProps)(App))
