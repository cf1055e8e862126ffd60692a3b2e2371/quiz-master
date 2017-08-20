import React from 'react'
import PropTypes from 'prop-types'

class QuizView extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
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
    return (this.state.answer === this.props.question.answer)
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
          <label className="col-sm-3 control-label">Q.</label>
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
}

export default QuizView
