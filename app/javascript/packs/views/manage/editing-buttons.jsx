import React from 'react'
import PropTypes from 'prop-types'

const EditingButtons = ({ onSend, onCancel }) => (
  <div>
    <button
      className="btn btn-primary"
      onClick={onSend}
    >Send</button>
    <button
      className="btn btn-default"
      onClick={onCancel}
    >Cancel</button>
  </div>
)

EditingButtons.propTypes = {
  onSend: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default EditingButtons
