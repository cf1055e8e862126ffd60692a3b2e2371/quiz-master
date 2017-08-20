import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'
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
    if (
      !commandId ||
      !nextProps.command[commandId] ||
      this.props.command[commandId].state !== COMMAND_STATE.REQUESTED
    ) {
      return
    }
    if (nextProps.command[commandId].state === COMMAND_STATE.SUCCEEDED) {
      this.setState(NewQuestion.initialState)
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

  getContentCell() {
    if (this.state.isEditing) {
      return (
        <ContentInput
          onChange={(value) => { this.onChange('content', value) }}
        />
      )
    }
    return null
  }

  getAnswerCell() {
    if (this.state.isEditing) {
      return (
        <AnswerInput
          onChange={(value) => { this.onChange('answer', value) }}
        />
      )
    }
    return null
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
      <button
        className="btn btn-success"
        onClick={() => { this.onEdit() }}
      >Add</button>
    )
  }

  render() {
    if (this.state.isEditing) {
      return (
        <table>
          <tbody>
            <tr>
              <td>{this.getContentCell()}</td>
              <td>{this.getAnswerCell()}</td>
              <td>{this.getButtons()}</td>
            </tr>
          </tbody>
        </table>
      )
    }
    return <div>{this.getButtons()}</div>
  }
}

NewQuestion.propTypes = {
  command: PropTypes.object.isRequired,
  addQuestion: PropTypes.func.isRequired,
}

export default NewQuestion
