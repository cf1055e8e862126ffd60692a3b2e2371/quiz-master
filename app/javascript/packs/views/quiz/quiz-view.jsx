import React from 'react'
import PropTypes from 'prop-types'
import AnswerResult from './answer-result'
import QuestionContent from './question-content'
import QuestionAnswer from './question-answer'
import toNumber from '../../helpers/to-number'

class QuizView extends React.Component {
  static isCorrectAnswerWord(correct, answer) {
    const intCorrect = parseInt(correct, 10)
    if (isNaN(intCorrect)) {
      return (correct === answer)
    }
    return (
      intCorrect === parseInt(answer, 10) ||
      intCorrect === toNumber(answer)
    )
  }

  static get initialState() {
    return {
      isCorrect: undefined,
      answer: '',
    }
  }

  constructor(props) {
    super(props)
    this.state = QuizView.initialState
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question.id !== nextProps.question.id) {
      this.setState(QuizView.initialState)
    }
  }

  onChange(answer) {
    this.setState({ answer })
  }

  onClickCheck() {
    this.setState({
      isCorrect: this.isCorrectAnswer(),
    })
  }

  isCorrectAnswer() {
    const correctAnswer = this.props.question.answer
    const userAnswer = this.state.answer
    if (QuizView.isCorrectAnswerWord(correctAnswer, userAnswer)) {
      return true
    }
    // consider with answer contains a number:
    // to accept space delimiter of number string on user's answer,
    // separate three blocks by before and after of number
    const correctAnswerWords = correctAnswer.split(' ')
    const numberStringIndex = correctAnswerWords.findIndex(answerWord => (
      !isNaN(parseInt(answerWord, 10))
    ))
    if (numberStringIndex === -1) { return false }
    const beforeNumber = (
      correctAnswerWords.slice(0, numberStringIndex).join(' ')
    )
    if (!userAnswer.startsWith(beforeNumber)) { return false }
    let candidate = userAnswer.slice(beforeNumber.length)
    const afterNumber = (
      correctAnswerWords.slice(numberStringIndex + 1).join(' ')
    )
    if (!candidate.endsWith(afterNumber)) { return false }
    candidate = candidate.slice(0, candidate.length - afterNumber.length)
    return QuizView.isCorrectAnswerWord(
      correctAnswerWords[numberStringIndex], candidate,
    )
  }

  render() {
    return (
      <section className="form-horizontal">
        <QuestionContent
          content={this.props.question.content}
          page={this.props.page}
        />
        <QuestionAnswer
          answer={this.state.answer}
          onChange={value => this.onChange(value)}
        />
        <div className="quiz-answer-button-container">
          <AnswerResult isCorrect={this.state.isCorrect} />
          <button
            className="btn btn-primary quiz-answer-button"
            onClick={() => { this.onClickCheck() }}
          >Check</button>
        </div>
      </section>
    )
  }
}

QuizView.propTypes = {
  question: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

export default QuizView
