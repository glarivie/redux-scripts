import React, { Component } from 'react'
import { Flex } from '@hqro/gojji'
import get from 'lodash/get'

import { initialValues, types } from 'constants'
import { connect } from 'helpers'

import styles from './Home.module.scss'

class Home extends Component {
  static propTypes = {
    location: types.location,
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

const mapStateToProps = ({ router }) => ({
  location: get(router, 'location', initialValues.location),
})

export default connect(mapStateToProps)(Home)
