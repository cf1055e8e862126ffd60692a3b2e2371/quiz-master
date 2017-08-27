import React from 'react'
import PropTypes from 'prop-types'

const QuestionRowButtons = ({ onClickEdit, onClickDelete }) => (
  <div>
    <button
      className="btn btn-warning"
      onClick={onClickEdit}
    >Edit</button>
    <button
      className="btn btn-danger"
      onClick={onClickDelete}
    >Delete</button>
  </div>
)

QuestionRowButtons.propTypes = {
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default QuestionRowButtons
