import React from 'react'
import PropTypes from 'prop-types'

const EditingButtons = ({ onClickSend, onClickCancel }) => (
  <div>
    <button
      className="btn btn-primary"
      onClick={onClickSend}
    >Send</button>
    <button
      className="btn btn-default"
      onClick={onClickCancel}
    >Cancel</button>
  </div>
)

EditingButtons.propTypes = {
  onClickSend: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
}

export default EditingButtons
