import React from 'react'
import PropTypes from 'prop-types'

const PagingButton = ({ className, onClick, disabled, children }) => {
  const classes = [ className ]
  if (disabled) {
    classes.push('disabled')
  }
  return (
    <div
      className={classes.join(' ')}
      role="button"
      tabIndex={0}
      onClick={() => {
        if (!disabled) { onClick() }
      }}
    >{children}</div>
  )
}

PagingButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default PagingButton
