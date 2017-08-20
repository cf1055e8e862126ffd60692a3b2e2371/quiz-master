import React from 'react'
import PropTypes from 'prop-types'

class QuizView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCorrect: undefined,
      answer: '',
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
    console.log(this.state.answer, this.props.question.answer)
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
      <section>
        <div>Q. {this.props.question.content}</div>
        <div>A.
          <input
            type="text"
            className="form-control"
            placeholder="Input Answer !"
            onChange={(event) => {
              this.onChange(event.target.value)
            }}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => { this.onClickCheck() }}
          >Check</button>
          <div>{this.answerResult}</div>
        </div>
      </section>
    )
  }
}

QuizView.propTypes = {
  question: PropTypes.object.isRequired,
}

export default QuizView
