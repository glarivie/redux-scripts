import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'components'
import styles from './Home.scss'

class Home extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render = () => {
    const { location: { pathname } } = this.props

    return (
      <Flex className={styles.Home} column center>
        <h1 className={styles.title}>Homepage</h1>
        <p>You are here: {pathname}</p>
      </Flex>
    )
  }
}

export default Home
