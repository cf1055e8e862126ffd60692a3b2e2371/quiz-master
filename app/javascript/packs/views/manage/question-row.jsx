import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'
import COMMAND_STATE from '../../consts/command-state'

class QuestionRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      content: props.question.content,
      answer: props.question.answer,
      commandId: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    const commandId = this.state.commandId
    if (
      !commandId ||
      !nextProps.command[commandId] ||
      this.props.command[commandId].state !== COMMAND_STATE.REQUESTED
    ) {
      return
    }
    if (nextProps.command[commandId].state === COMMAND_STATE.SUCCEEDED) {
      this.setState({ isEditing: false, commandId: null })
    }
  }

  onEdit() {
    this.setState({ isEditing: true })
  }

  onDelete() {
    const commandId = this.props.deleteQuestion(this.props.question.id)
    this.setState({ commandId })
  }

  onCancel() {
    this.setState({
      isEditing: false,
      content: this.props.question.content,
      answer: this.props.question.answer,
    })
  }

  onSend() {
    const commandId = this.props.updateQuestion({
      id: this.props.question.id,
      content: this.state.content,
      answer: this.state.answer,
    })
    this.setState({ commandId })
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
  command: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
}

export default QuestionRow
