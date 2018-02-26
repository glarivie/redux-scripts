import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get, debounce } from 'lodash'

import actions from 'actions'
import { Router } from 'containers'
import { types, initialValues } from 'constants'

import styles from './App.scss'

class App extends Component {
  static propTypes = {
    updateWindowWidth: PropTypes.func.isRequired,
    width: types.width,
  }

  componentDidMount = () => {
    this._debounceUpdate()
    window.addEventListener('resize', this._debounceUpdate)
  }

  componentWillUnmount = () =>
    window.removeEventListener('resize', this._debounceUpdate)

  _updateWindowWidth = () => {
    const { updateWindowWidth } = this.props
    const { width } = findDOMNode(this._app).getBoundingClientRect()

    updateWindowWidth(width)
  }

  _debounceUpdate = debounce(this._updateWindowWidth, 250)

  render = () => (
    <div className={styles.App} ref={c => this._app = c}>
      <Router />
    </div>
  )
}

const mapStateToProps = ({ app }) => ({
  width: get(app, 'width', initialValues.width),
})

const mapDispatchToProps = dispatch => ({
  updateWindowWidth: width => dispatch(actions.app.updateWindowWidth(width)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
