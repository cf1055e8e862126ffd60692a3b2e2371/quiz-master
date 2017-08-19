import { startCommand, COMMAND } from './command'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTIONS'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'

export const setQuestions = ({ questions }) => ({
  type: SET_QUESTIONS,
  questions,
})

export const addQuestion = ({ question }) => ({
  type: ADD_QUESTION,
  question,
})

export const updateQuestion = ({ question }) => ({
  type: UPDATE_QUESTION,
  question,
})

export const deleteQuestion = id => ({
  type: DELETE_QUESTION,
  id,
})

export const startGetQuestionsCommand = () => (
  startCommand(COMMAND.GET_QUESTIONS)
)

export const startAddQuestionCommand = ({ content, answer }) => (
  startCommand(COMMAND.ADD_QUESTION, { content, answer })
)

export const startUpdateQuestionCommand = ({ id, content, answer }) => (
  startCommand(COMMAND.UPDATE_QUESTION, { id, content, answer })
)

export const startDeleteQuestionCommand = id => (
  startCommand(COMMAND.DELETE_QUESTION, id)
)
