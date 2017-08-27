import React from 'react'
import PropTypes from 'prop-types'

class QuestionAnswer extends React.Component {
  focusInput() {
    this.input.focus()
  }

  componentDidMount() {
    this.focusInput()
  }

  componentDidUpdate() {
    this.focusInput()
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
            ref={input => { this.input = input }}
            onChange={(event) => {
              this.props.onChange(event.target.value)
            }}
          />
        </div>
      </div>
    )    
  }  
}

QuestionAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default QuestionAnswer
