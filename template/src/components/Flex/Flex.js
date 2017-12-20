import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Flex = ({ children, className, row, column, center, grow, disabled, wrap, ...props }) => !disabled && (
  <div
    className={cx(className, 'flex', {
      'flex-row': row,
      'flex-column': column,
      'flex-center': center,
      'flex-grow': grow,
      'flex-wrap': wrap,
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
