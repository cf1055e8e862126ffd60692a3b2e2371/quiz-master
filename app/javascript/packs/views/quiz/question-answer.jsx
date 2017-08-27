import React from 'react'
import PropTypes from 'prop-types'

class QuestionAnswer extends React.Component {
  componentDidMount() {
    this.focusInput()
  }

  componentDidUpdate() {
    this.focusInput()
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onEnterKey()
    }
  }

  focusInput() {
    this.input.focus()
  }

  render() {
    return (
      <div className="form-group">
        <div className="col-sm-1 control-label quiz-header">A.</div>
        <div className="col-sm-11">
          <input
            type="text"
            className="form-control quiz-answer-input"
            placeholder="Input Answer !"
            value={this.props.answer}
            ref={(input) => { this.input = input }}
            onChange={(event) => {
              this.props.onChange(event.target.value)
            }}
            onKeyDown={(e) => { this.onKeyDown(e) }}
          />
        </div>
      </div>
    )
  }
}

QuestionAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterKey: PropTypes.func.isRequired,
}

export default QuestionAnswer
