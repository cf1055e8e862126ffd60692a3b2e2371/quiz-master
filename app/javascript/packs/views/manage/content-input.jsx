import React from 'react'
import PropTypes from 'prop-types'
import ContentEditable from 'react-contenteditable'
import ContentInputToolbar from './content-input-toolbar'

const ContentInput = ({ onChange, defaultValue, error, disabled }) => (
  <div>
    <ContentEditable
      className="form-control manage-content-input"
      disabled={disabled}
      html={defaultValue}
      onChange={(event) => {
        const value = event.target.value
        onChange(value)
      }}
    />
    <ContentInputToolbar />
    <div className="manage-error-message">{error}</div>
  </div>
)

ContentInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

ContentInput.defaultProps = {
  defaultValue: '',
  error: '',
  disabled: false,
}

export default ContentInput
