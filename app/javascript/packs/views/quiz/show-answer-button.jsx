import React from 'react'
import PropTypes from 'prop-types'

class ShowAnswerButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
    }
  }

  onClickShow() {
    this.setState({ isShown: true })
  }

  renderAnswer() {
    return (
      <div>
        Answer: <code>{this.props.answer}</code>
      </div>
    )
  }

  render() {
    return (
      <div className="quiz-show-answer">
        <div>
          <button
            className="btn btn-warning quiz-answer-button"
            onClick={() => { this.onClickShow() }}
            disabled={this.state.isShown}
          >Show Answer</button>
        </div>
        {this.state.isShown ? this.renderAnswer() : ''}
      </div>
    )
  }
}

ShowAnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
}

export default ShowAnswerButton
