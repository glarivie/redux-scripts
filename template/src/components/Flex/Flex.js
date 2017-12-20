import React from 'react'
import PropTypes from 'prop-types'

const flexProps = {
  row: 'flex-row',
  column: 'flex-column',
  center: 'flex-center',
  grow: 'flex-grow',
  wrap: 'flex-wrap',
}

const Flex = ({ children, className, disabled, ...props }) => {
  const propsKeys = Object.keys(props)
  const layoutProps = propsKeys.filter(p => propsKeys.includes(p)).map(p => flexProps[p])

  if (disabled) return false

  return (
    <div
      className={[className, ...layoutProps].join(' ')}
      {...props} // onClick, onMouseLeave...
    >
      {children}
    </div>
  )
}

Flex.defaultProps = {
  column: false,
  row: true,
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
