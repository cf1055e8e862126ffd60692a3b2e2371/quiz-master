import React from 'react'
import PropTypes from 'prop-types'
import NewQuestion from '../manage/new-question'
import Questions from '../manage/questions'

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
        <Questions questions={this.props.questions} />
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
