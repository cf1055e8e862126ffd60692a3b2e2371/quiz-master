import React from 'react'
import PropTypes from 'prop-types'
import NewQuestion from '../manage/new-question'
import QuestionRow from '../manage/question-row'

class ManagePage extends React.Component {
  constructor(props) {
    super(props)
    props.startGetQuestions()
  }

  render() {
    if (!this.props.questions) { return <div /> }
    return (
      <div className="manage-page">
        <NewQuestion />
        <table className="table">
          <thead>
            <tr>
              <th className="col-md-1">Index</th>
              <th className="col-md-6">Content</th>
              <th className="col-md-3">Answer</th>
              <th className="col-md-2" />
            </tr>
          </thead>
          <tbody>
            {
              this.props.questions.map((question, i) => (
                <QuestionRow key={question.id} order={i + 1} question={question} />
              ))
            }
          </tbody>
        </table>
      </div>
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
