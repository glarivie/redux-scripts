import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'components'
import styles from './Home.scss'

class Home extends Component {
  static propTypes = {

  }

  render = () => {

    return (
      <Flex className={styles.Home} column center>
        <h1 className={styles.title}>Homepage</h1>
      </Flex>
    )
  }
}

export default Home
