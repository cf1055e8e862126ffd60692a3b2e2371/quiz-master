import React from 'react'
import PropTypes from 'prop-types'
import AnswerResult from './answer-result'
import QuestionContent from './question-content'
import QuestionAnswer from './question-answer'
import isCorrectAnswer from '../../helpers/is-correct-answer'

class QuizBody extends React.Component {
  static get initialState() {
    return {
      isCorrect: undefined,
      answer: '',
    }
  }

  constructor(props) {
    super(props)
    this.state = QuizBody.initialState
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question.id !== nextProps.question.id) {
      this.setState(QuizBody.initialState)
    }
  }

  onChange(answer) {
    this.setState({ answer })
  }

  onClickCheck() {
    this.setState({
      isCorrect: isCorrectAnswer(
        this.props.question.answer,
        this.state.answer,
      ),
    })
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

QuizBody.propTypes = {
  question: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
}

export default QuizBody
