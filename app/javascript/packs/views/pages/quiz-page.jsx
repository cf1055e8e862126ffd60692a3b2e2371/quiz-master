import React from 'react'
import PropTypes from 'prop-types'
import QuizView from '../quiz/quiz-view'

class QuizPage extends React.Component {
  constructor(props) {
    super(props)
    props.startGetQuestions()
    this.state = {
      page: 1,
    }
  }

  nextPage() {
    if (this.state.page === this.props.questions.length) { return }
    this.setState({ page: this.state.page + 1 })
  }

  prevPage() {
    if (this.state.page === 1) { return }
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    if (!this.props.questions) { return <div /> }
    if (!this.props.questions.length === 0) {
      return <div>There are no questions!</div>
    }
    return (
      <div>
        <QuizView question={this.props.questions[this.state.page - 1]} />
        <div role="button" tabIndex={0} onClick={() => (this.prevPage())}>←</div>
        <div role="button" tabIndex={0} onClick={() => (this.nextPage())}>→</div>
      </div>
    )
  }
}

QuizPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  startGetQuestions: PropTypes.func.isRequired,
}
QuizPage.defaultProps = {
  questions: undefined,
}

export default QuizPage