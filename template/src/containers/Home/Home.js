import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Flex } from '../../components'
import './Home.css'

class Home extends Component {
  static propTypes = {

  }

  render = () => {

    return (
      <Flex className="Home" column center>
        <h1>Homepage</h1>
      </Flex>
    )
  }
}

export default Home
