import { connect } from 'react-redux'
import NewQuestion from './new-question.jsx'
import { startAddQuestionCommand } from '../../actions/question'

const mapDispatchToProps = dispatch => ({
  addQuestion: ({ content, answer }) => {
    dispatch(startAddQuestionCommand({ content, answer }))
  },
})

const NewQuestionContainer = connect(
  undefined,
  mapDispatchToProps,
)(NewQuestion)

export default NewQuestionContainer
