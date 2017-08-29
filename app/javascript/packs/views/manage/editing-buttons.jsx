import React from 'react'
import PropTypes from 'prop-types'

const EditingButtons = ({ onClickSend, onClickCancel, disabled }) => (
  <div>
    <button
      className="btn btn-primary"
      disabled={disabled}
      onClick={onClickSend}
    >Send</button>
    <button
      className="btn btn-default"
      disabled={disabled}
      onClick={onClickCancel}
    >Cancel</button>
  </div>
)

EditingButtons.propTypes = {
  onClickSend: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

EditingButtons.defaultProps = {
  disabled: false,
}

export default EditingButtons
