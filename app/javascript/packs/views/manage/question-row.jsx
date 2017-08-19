import React from 'react'
import PropTypes from 'prop-types'

class QuestionRow extends React.Component {
  constructor(props) {
    super(props)
  }

  onEdit() {
    console.log('onEdit', this.props.order)
  }

  onDelete() {
    console.log('onDelete', this.props.order)
  }

  render() {
    return (
      <tr>
        <td>{this.props.order}</td>
        <td>{this.props.question.content}</td>
        <td>{this.props.question.answer}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => { this.onEdit() }}
          >Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => { this.onDelete() }}
          >Delete</button>
        </td>
      </tr>
    )
  }
}

QuestionRow.propTypes = {
  order: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
}

export default QuestionRow
