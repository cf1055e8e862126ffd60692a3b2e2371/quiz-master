import React from 'react'
import PropTypes from 'prop-types'
import ContentEditable from 'react-contenteditable'

const ContentInput = ({ onChange, defaultValue }) => (
  <ContentEditable
    className="form-control manage-content-input"
    html={defaultValue}
    onChange={(event) => {
      const value = event.target.value
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
