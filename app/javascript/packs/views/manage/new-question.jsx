import React from 'react'
import PropTypes from 'prop-types'
import ContentInput from './content-input'
import AnswerInput from './answer-input'

class NewQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      content: '',
      answer: '',
    }
  }

  onEdit() {
    this.setState({ isEditing: true })
  }

  onCancel() {
    this.setState({
      isEditing: false,
      content: '',
      answer: '',
    })
  }

  onSend() {
    this.props.addQuestion({
      content: this.state.content,
      answer: this.state.answer,
    })
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
  }

  getAnswerCell() {
    if (this.state.isEditing) {
      return (
        <AnswerInput
          onChange={(value) => { this.onChange('answer', value) }}
        />
      )
    }
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
  addQuestion: PropTypes.func.isRequired,
}

export default NewQuestion
