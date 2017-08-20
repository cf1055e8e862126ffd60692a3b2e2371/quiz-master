import { connect } from 'react-redux'
import QuizPage from '../pages/quiz-page.jsx'
import { startGetQuestionsCommand } from '../../actions/question'
import getCommandId from '../../helpers/get-command-id'

const mapStateToProps = state => ({
  questions: state.questions,
})

const mapDispatchToProps = dispatch => ({
  startGetQuestions: () => {
    dispatch(startGetQuestionsCommand(getCommandId()))
  },
})

const QuizPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizPage)

export default QuizPageContainer
