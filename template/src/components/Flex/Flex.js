import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Flex.scss'

const Flex = ({ children, className, row, column, center, grow, disabled, wrap, ...props }) => !disabled && (
  <div
    className={cx(className, styles.Flex, {
      [styles.flexRow]: Boolean(row),
      [styles.flexColumn]: Boolean(column),
      [styles.flexCenter]: Boolean(center),
      [styles.flexGrow]: Boolean(grow),
      [styles.flexWrap]: Boolean(wrap),
    })}
    {...props}
  >
    {children}
  </div>
)

Flex.defaultProps = {
  column: false,
  row: false,
  center: false,
  grow: false,
  wrap: false,
  disabled: false,
}

Flex.propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  column: PropTypes.bool,
  grow: PropTypes.bool,
  wrap: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Flex
