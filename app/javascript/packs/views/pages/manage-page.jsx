import React, { PropTypes } from 'react'

class ManagePage extends React.Component {
  constructor(props) {
    super(props)
    props.startGetQuestions()
  }

  render() {
    if (!this.props.questions) { return <div /> }
    return (
      <table>
        <thead>
          <tr>
            <th>Content</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.questions.map(question => (
              <tr key={question.id}>
                <td>{question.content}</td>
                <td>{question.answer}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

ManagePage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  startGetQuestions: PropTypes.func.isRequired,
}
ManagePage.defaultProps = {
  questions: undefined,
}

export default ManagePage
