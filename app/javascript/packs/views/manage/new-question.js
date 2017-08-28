import { connect } from 'react-redux'
import NewQuestion from './new-question.jsx'
import { startAddQuestionCommand } from '../../actions/question'
import getCommandId from '../../helpers/get-command-id'

const mapStateToProps = state => (
  {
    commands: state.commands,
  }
)

const mapDispatchToProps = dispatch => ({
  addQuestion: ({ content, answer }) => {
    const commandId = getCommandId()
    dispatch(startAddQuestionCommand(commandId, { content, answer }))
    return commandId
  },
})

const NewQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewQuestion)

export default NewQuestionContainer
