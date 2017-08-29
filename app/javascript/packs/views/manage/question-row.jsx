/* eslint react/no-danger: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'
import EditingButtons from './editing-buttons'
import QuestionRowButtons from './question-row-buttons'
import validateQuestion from '../../validators/validate-question'
import commandStateChangedTo from '../../helpers/command-state-changed-to'
import COMMAND_STATE from '../../consts/command-state'

class QuestionRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  componentWillReceiveProps(nextProps) {
    const commandId = this.state.commandId
    const stateChangedTo = commandStateChangedTo({
      commandId,
      currentCommands: this.props.commands,
      nextCommands: nextProps.commands,
    })
    if (stateChangedTo === COMMAND_STATE.SUCCEEDED) {
      this.setState({ isEditing: false, commandId: null })
    } else if (stateChangedTo === COMMAND_STATE.FAILED) {
      alert('Fail to update question')
    }
  }

  onEdit() {
    this.setState({ isEditing: true })
  }

  onDelete() {
    if (!confirm('Delete this question, OK ?')) { return }
    const commandId = this.props.deleteQuestion(this.props.question.id)
    this.setState({ commandId })
  }

  onCancel() {
    this.setState(this.initialState)
  }

  onSend() {
    const errors = validateQuestion({
      content: this.state.content,
      answer: this.state.answer,
    })
    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
      return
    }
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

  get initialState() {
    return {
      isEditing: false,
      content: this.props.question.content,
      answer: this.props.question.answer,
      commandId: null,
      errors: {},
    }
  }

  getRow(contentCell, answerCell, buttonCell) {
    return (
      <tr>
        <td>{this.props.order}</td>
        <td className="question-content-cell">{contentCell}</td>
        <td className="question-answer-cell">{answerCell}</td>
        <td>{buttonCell}</td>
      </tr>
    )
  }

  get disabled() {
    const commandId = this.state.commandId
    return (
      commandId &&
      this.props.commands[commandId].state === COMMAND_STATE.REQUESTED
    )
  }

  get editingView() {
    return this.getRow(
      <ContentInput
        defaultValue={this.state.content}
        onChange={(value) => { this.onChange('content', value) }}
        error={this.state.errors.content}
        disabled={this.disabled}
      />,
      <AnswerInput
        defaultValue={this.state.answer}
        onChange={(value) => { this.onChange('answer', value) }}
        error={this.state.errors.answer}
        disabled={this.disabled}
      />,
      <EditingButtons
        onClickSend={() => { this.onSend() }}
        onClickCancel={() => { this.onCancel() }}
        disabled={this.disabled}
      />,
    )
  }

  get initialView() {
    return this.getRow(
      <div
        className="manage-question-content-preview"
        dangerouslySetInnerHTML={{ __html: this.state.content }}
      />,
      <div className="manage-question-answer-preview">
        {this.state.answer}
      </div>,
      <QuestionRowButtons
        onClickEdit={() => { this.onEdit() }}
        onClickDelete={() => { this.onDelete() }}
      />,
    )
  }

  render() {
    return (
      this.state.isEditing ? this.editingView : this.initialView
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
  commands: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
}

export default QuestionRow
