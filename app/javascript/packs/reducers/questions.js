import { SET_QUESTIONS } from '../actions/question'

const questions = (state = null, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions
    default:
      return state
  }
}

export default questions
