import { connect } from 'react-redux'
import QuestionRow from './question-row.jsx'
import {
  startUpdateQuestionCommand,
  startDeleteQuestionCommand,
} from '../../actions/question'
import getCommandId from '../../helpers/get-command-id'

const mapStateToProps = state => (
  {
    command: state.command,
  }
)

const mapDispatchToProps = dispatch => ({
  updateQuestion: ({ id, content, answer }) => {
    const commandId = getCommandId()
    dispatch(startUpdateQuestionCommand(commandId, { id, content, answer }))
    return commandId
  },
  deleteQuestion: (id) => {
    const commandId = getCommandId()
    dispatch(startDeleteQuestionCommand(commandId, id))
    return commandId
  },
})

const QuestionRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionRow)

export default QuestionRowContainer
