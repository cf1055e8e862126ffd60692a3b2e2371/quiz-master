import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'
import commandStateChangedTo from '../../helpers/command-state-changed-to'
import COMMAND_STATE from '../../consts/command-state'

class NewQuestion extends React.Component {
  static get initialState() {
    return {
      isEditing: false,
      content: '',
      answer: '',
      commandId: null,
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
      currentCommand: this.props.command,
      nextCommand: nextProps.command,
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
    const commandId = this.props.addQuestion({
      content: this.state.content,
      answer: this.state.answer,
    })
    this.setState({ commandId })
  }

  onChange(key, value) {
    this.setState({ [key]: value })
  }

  get editingButtons() {
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

  get newButton() {
    return (
      <button
        className="btn btn-success"
        onClick={() => { this.onEdit() }}
      >New Question</button>
    )
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div className="manage-new-question">
          <div className="col-md-1" />
          <div className="col-md-6">
            <ContentInput
              onChange={(value) => { this.onChange('content', value) }}
            />
          </div>
          <div className="col-md-3">
            <AnswerInput
              onChange={(value) => { this.onChange('answer', value) }}
            />
          </div>
          <div className="col-md-2">
            {this.editingButtons}
          </div>
        </div>
      )
    }
    return <div className="manage-new-question">{this.newButton}</div>
  }
}

NewQuestion.propTypes = {
  command: PropTypes.object.isRequired,
  addQuestion: PropTypes.func.isRequired,
}

export default NewQuestion
