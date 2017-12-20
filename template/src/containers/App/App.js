import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get, debounce } from 'lodash'

import actions from 'actions'
import { Flex } from 'components'

import styles from './App.scss'

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    updateWindowWidth: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
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

  render () {
    const { children } = this.props

    return (
      <div className={styles.App} ref={c => this._app = c}>
        <Flex className={styles.content} column grow>
          {children}
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  width: get(app, 'width', 300),
})

const mapDispatchToProps = dispatch => ({
  updateWindowWidth: width => dispatch(actions.app.updateWindowWidth(width)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
