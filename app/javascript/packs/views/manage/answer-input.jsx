import React from 'react'
import PropTypes from 'prop-types'

const AnswerInput = ({ onChange, defaultValue }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Answer"
    defaultValue={defaultValue}
    onChange={(event) => {
      const value = event.target.value.trim()
      onChange(value)
    }}
  />
)

AnswerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
}

AnswerInput.defaultProps = {
  defaultValue: '',
}

export default AnswerInput
