import React from 'react'
import PropTypes from 'prop-types'
import toNumber from '../../helpers/to-number'

class QuizView extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

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

  componentWillReceiveProps(nextProps) {
    if (this.props.question.id !== nextProps.question.id) {
      this.setState(this.initialState)
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

  get initialState() {
    return {
      isCorrect: undefined,
      answer: '',
    }
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
      correctAnswerWords[numberStringIndex], candidate
    )
  }

  get answerResult() {
    if (this.state.isCorrect === true) {
      return 'Correct !'
    } else if (this.state.isCorrect === false) {
      return 'Incorrect !'
    }
    return ''
  }

  render() {
    return (
      <section className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label">
            Q{this.props.page}.
          </label>
          <div className="col-sm-9 quiz-content">
            {this.props.question.content}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">A.</label>
          <input
            type="text"
            className="col-sm-9 form-control quiz-answer-input"
            placeholder="Input Answer !"
            value={this.state.answer}
            onChange={(event) => {
              this.onChange(event.target.value)
            }}
          />
        </div>
        <div className="quiz-answer-button-container">
          <button
            className="btn btn-primary quiz-answer-button"
            onClick={() => { this.onClickCheck() }}
          >Check</button>
          <div className="quiz-answer-result">{this.answerResult}</div>
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
