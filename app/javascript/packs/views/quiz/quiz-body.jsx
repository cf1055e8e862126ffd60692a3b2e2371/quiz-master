import React from 'react'
import PropTypes from 'prop-types'
import AnswerResult from './answer-result'
import QuestionContent from './question-content'
import QuestionAnswer from './question-answer'
import ShowAnswerButton from './show-answer-button'
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

  renderButton() {
    if (this.state.isCorrect === true && this.props.moveNextPage) {
      return (
        <button
          className="btn btn-success quiz-answer-button"
          onClick={this.props.moveNextPage}
        >
          <span className="glyphicon glyphicon-arrow-right" />
          Next Question
        </button>
      )
    }
    return (
      <button
        className="btn btn-primary quiz-answer-button"
        onClick={() => { this.onClickCheck() }}
      >Check</button>
    )
  }

  renderShowAnswerButton() {
    if (this.state.isCorrect === false) {
      return <ShowAnswerButton answer={this.props.question.answer} />
    }
    return <div />
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
          onEnterKey={() => { this.onClickCheck() }}
        />
        <div className="quiz-answer-button-container">
          <AnswerResult isCorrect={this.state.isCorrect} />
          {this.renderButton()}
          {this.renderShowAnswerButton()}
        </div>
      </section>
    )
  }
}

QuizBody.propTypes = {
  question: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  moveNextPage: PropTypes.func,
}

QuizBody.defaultProps = {
  moveNextPage: undefined,
}

export default QuizBody
