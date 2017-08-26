import React from 'react'
import PropTypes from 'prop-types'

const getCorrectComponent = () => (
  <div className="quiz-answer-result-correct">
    <span className="glyphicon glyphicon-thumbs-up" /> Correct !!
  </div>
)

const getIncorrectComponent = () => (
  <div className="quiz-answer-result-incorrect">
    <span className="glyphicon glyphicon-remove" /> Incorrect ...
  </div>
)

const AnswerResult = ({ isCorrect }) => {
  if (isCorrect === undefined) {
    return <div className="quiz-answer-result" />
  }
  return isCorrect ? getCorrectComponent() : getIncorrectComponent()
}

AnswerResult.propTypes = {
  isCorrect: PropTypes.bool,
}

AnswerResult.defaultProps = {
  isCorrect: undefined,
}

export default AnswerResult
