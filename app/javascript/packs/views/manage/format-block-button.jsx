import React from 'react'
import PropTypes from 'prop-types'

const execFormatBlock = (tagName) => {
  document.execCommand('formatBlock', false, `<${tagName}>`)
}

const FormatBlockButton = ({ tagName }) => (
  <button
    type="button"
    className="btn btn-default"
    onClick={() => { execFormatBlock(tagName.toLowerCase()) }}
  >{ tagName.toUpperCase() }</button>
)

FormatBlockButton.propTypes = {
  tagName: PropTypes.string.isRequired,
}

export default FormatBlockButton
