import React from 'react'
import PropTypes from 'prop-types'
import QuestionRow from './question-row'

const Questions = ({ questions }) => {
  if (questions.length === 0) {
    return <div />
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col-md-1">Index</th>
          <th className="col-md-6">Content</th>
          <th className="col-md-3">Answer</th>
          <th className="col-md-2" />
        </tr>
      </thead>
      <tbody>
        {
          questions.map((question, i) => (
            <QuestionRow key={question.id} order={i + 1} question={question} />
          ))
        }
      </tbody>
    </table>
  )
}

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Questions

