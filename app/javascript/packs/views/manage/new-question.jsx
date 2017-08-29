import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'
import EditingButtons from './editing-buttons'
import validateQuestion from '../../validators/validate-question'
import commandStateChangedTo from '../../helpers/command-state-changed-to'
import COMMAND_STATE from '../../consts/command-state'

class NewQuestion extends React.Component {
  static get initialState() {
    return {
      isEditing: false,
      content: '',
      answer: '',
      commandId: null,
      errors: {},
    }
  }

  constructor(props) {
    super(props)
    this.state = NewQuestion.initialState
  }

  componentWillReceiveProps(nextProps) {
    const commandId = this.state.commandId
    const stateChangedTo = commandStateChangedTo({
      commandId,
      currentCommands: this.props.commands,
      nextCommands: nextProps.commands,
    })
    if (stateChangedTo === COMMAND_STATE.SUCCEEDED) {
      this.setState(NewQuestion.initialState)
    } else if (stateChangedTo === COMMAND_STATE.FAILED) {
      alert('Fail to send new question')
    }
  }

  onEdit() {
    this.setState({ isEditing: true })
  }

  onCancel() {
    this.setState(NewQuestion.initialState)
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
    const commandId = this.props.addQuestion({
      content: this.state.content,
      answer: this.state.answer,
    })
    this.setState({ commandId })
  }

  onChange(key, value) {
    this.setState({ [key]: value })
  }

  get disabled() {
    const commandId = this.state.commandId
    return (
      commandId &&
      this.props.commands[commandId].state === COMMAND_STATE.REQUESTED
    )
  }

  get editingView() {
    return (
      <div className="manage-new-question">
        <h5>New Question:</h5>
        <div className="col-md-1" />
        <div className="col-md-6">
          <ContentInput
            onChange={(value) => { this.onChange('content', value) }}
            error={this.state.errors.content}
            disabled={this.disabled}
          />
        </div>
        <div className="col-md-3">
          <AnswerInput
            onChange={(value) => { this.onChange('answer', value) }}
            error={this.state.errors.answer}
            disabled={this.disabled}
          />
        </div>
        <div className="col-md-2">
          <EditingButtons
            onClickSend={() => { this.onSend() }}
            onClickCancel={() => { this.onCancel() }}
            disabled={this.disabled}
          />
        </div>
      </div>
    )
  }

  get initialView() {
    return (
      <div className="manage-new-question">
        <button
          className="btn btn-success"
          onClick={() => { this.onEdit() }}
        >New Question</button>
      </div>
    )
  }

  render() {
    return (
      this.state.isEditing ? this.editingView : this.initialView
    )
  }
}

NewQuestion.propTypes = {
  commands: PropTypes.object.isRequired,
  addQuestion: PropTypes.func.isRequired,
}

export default NewQuestion
