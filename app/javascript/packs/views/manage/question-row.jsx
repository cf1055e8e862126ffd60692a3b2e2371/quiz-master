import React from 'react'
import PropTypes from 'prop-types'

const QuestionRow = ({ order, question }) => (
  <tr>
    <td>{order}</td>
    <td>{question.content}</td>
    <td>{question.answer}</td> 
  </tr>
)

QuestionRow.propTypes = {
  order: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
}

export default QuestionRow
