import { connect } from 'react-redux'
import ManagePage from '../pages/manage-page.jsx'
import { startGetQuestionsCommand } from '../../actions/question'

const mapStateToProps = state => ({
  questions: state.questions,
  results: state.results,
})

const mapDispatchToProps = dispatch => ({
  startGetQuestions: () => {
    dispatch(startGetQuestionsCommand())
  },
})

const ManagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManagePage)

export default ManagePageContainer
