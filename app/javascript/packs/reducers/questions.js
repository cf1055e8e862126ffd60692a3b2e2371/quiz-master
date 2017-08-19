import {
  SET_QUESTIONS,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from '../actions/question'

const questions = (state = null, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions
    case ADD_QUESTION:
      return state.concat([action.question])
    case UPDATE_QUESTION:
      return state.map(question => (
        (action.question.id === question.id) ? action.question : question
      ))
    case DELETE_QUESTION:
      return state.filter(question => (action.id !== question.id))
    default:
      return state
  }
}

export default questions
