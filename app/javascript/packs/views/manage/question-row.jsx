import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'

class QuestionRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      content: props.question.content,
      answer: props.question.answer,
    }
  }

  onEdit() {
    this.setState({ isEditing: true })
  }

  onDelete() {
    this.props.deleteQuestion(this.props.question.id)
  }

  onCancel() {
    this.setState({
      isEditing: false,
      content: this.props.question.content,
      answer: this.props.question.answer,
    })
  }

  onSend() {
    this.props.updateQuestion({
      id: this.props.question.id,
      content: this.state.content,
      answer: this.state.answer,
    })
  }

  onChange(key, value) {
    this.setState({ [key]: value })
  }

  getContentCell() {
    const currentContent = this.state.content
    if (this.state.isEditing) {
      return (
        <ContentInput
          defaultValue={currentContent}
          onChange={(value) => { this.onChange('content', value) }}
        />
      )
    }
    return currentContent
  }

  getAnswerCell() {
    const currentAnswer = this.state.answer
    if (this.state.isEditing) {
      return (
        <AnswerInput
          defaultValue={currentAnswer}
          onChange={(value) => { this.onChange('answer', value) }}
        />
      )
    }
    return currentAnswer
  }

  getButtons() {
    if (this.state.isEditing) {
      return (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => { this.onSend() }}
          >Send</button>
          <button
            className="btn btn-default"
            onClick={() => { this.onCancel() }}
          >Cancel</button>
        </div>
      )
    }
    return (
      <div>
        <button
          className="btn btn-warning"
          onClick={() => { this.onEdit() }}
        >Edit</button>
        <button
          className="btn btn-danger"
          onClick={() => { this.onDelete() }}
        >Delete</button>
      </div>
    )
  }

  render() {
    return (
      <tr>
        <td>{this.props.order}</td>
        <td>{this.getContentCell()}</td>
        <td>{this.getAnswerCell()}</td>
        <td>{this.getButtons()}</td>
      </tr>
    )
  }
}

QuestionRow.propTypes = {
  order: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
  updateQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
}

export default QuestionRow
