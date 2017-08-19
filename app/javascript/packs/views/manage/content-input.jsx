import React from 'react'
import PropTypes from 'prop-types'

const ContentInput = ({ onChange, defaultValue }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Content"
    defaultValue={defaultValue}
    onChange={(event) => {
      const value = event.target.value.trim()
      onChange(value)
    }}
  />
)

ContentInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
}

ContentInput.defaultProps = {
  defaultValue: '',
}

export default ContentInput
