import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get, debounce } from 'lodash'

import actions from 'actions'
import { Home, Page404 } from 'containers'
import { types, initialValues } from 'contants'

import styles from './Router.scss'

class Router extends Component {
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
    <div className={styles.Router} ref={c => this._app = c}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/404" component={Page404} />
        <Route component={Page404} />
      </Switch>
    </div>
  )
}

const mapStateToProps = ({ app }) => ({
  width: get(app, 'width', initialValues.width),
})

const mapDispatchToProps = dispatch => ({
  updateWindowWidth: width => dispatch(actions.app.updateWindowWidth(width)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)
