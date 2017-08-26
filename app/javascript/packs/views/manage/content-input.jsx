import React from 'react'
import PropTypes from 'prop-types'
import ContentEditable from 'react-contenteditable'
import ContentInputToolbar from './content-input-toolbar'

const ContentInput = ({ onChange, defaultValue }) => (
  <div>
    <ContentEditable
      className="form-control manage-content-input"
      html={defaultValue}
      onChange={(event) => {
        const value = event.target.value
        onChange(value)
      }}
    />
    <ContentInputToolbar />
  </div>
)

ContentInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
}

ContentInput.defaultProps = {
  defaultValue: '',
}

export default ContentInput
