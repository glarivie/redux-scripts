import React from 'react'

import { Flex } from 'components'
import styles from './Page404.scss'

const Page404 = () => (
  <Flex className={styles.Page404} column center>
    <p className="error">Page not found</p>
  </Flex>
)

export default Page404
