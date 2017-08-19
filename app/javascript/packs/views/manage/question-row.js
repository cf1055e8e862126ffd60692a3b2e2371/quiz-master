import { connect } from 'react-redux'
import QuestionRow from './question-row.jsx'
import {
  startUpdateQuestionCommand,
  startDeleteQuestionCommand,
} from '../../actions/question'

const mapDispatchToProps = dispatch => ({
  updateQuestion: ({ id, content, answer }) => {
    dispatch(startUpdateQuestionCommand({ id, content, answer }))
  },
  deleteQuestion: (id) => {
    dispatch(startDeleteQuestionCommand(id))
  },
})

const QuestionRowContainer = connect(
  undefined,
  mapDispatchToProps,
)(QuestionRow)

export default QuestionRowContainer
