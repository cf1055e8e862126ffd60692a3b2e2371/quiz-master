import React from 'react'
import PropTypes from 'prop-types'

const AnswerInput = ({ onChange, defaultValue, error, disabled }) => (
  <div>
    <div>
      <input
        type="text"
        className="form-control manage-answer-input"
        placeholder="Answer"
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={(event) => {
          const value = event.target.value.trim()
          onChange(value)
        }}
      />
    </div>
    <div className="manage-error-message">{error}</div>
  </div>
)

AnswerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

AnswerInput.defaultProps = {
  defaultValue: '',
  error: '',
  disabled: false,
}

export default AnswerInput
