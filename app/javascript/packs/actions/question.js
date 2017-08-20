import { startCommand } from './command'
import COMMAND_NAME from '../consts/command-name'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTIONS'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'

export const setQuestions = ({ questions }) => ({
  type: SET_QUESTIONS,
  questions,
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question,
})

export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  question,
})

export const deleteQuestion = id => ({
  type: DELETE_QUESTION,
  id,
})

export const startGetQuestionsCommand = commandId => (
  startCommand(commandId, COMMAND_NAME.GET_QUESTIONS)
)

export const startAddQuestionCommand = (
  commandId, { content, answer },
) => (
  startCommand(commandId, COMMAND_NAME.ADD_QUESTION, { content, answer })
)

export const startUpdateQuestionCommand = (
  commandId, { id, content, answer },
) => (
  startCommand(
    commandId, COMMAND_NAME.UPDATE_QUESTION, { id, content, answer },
  )
)

export const startDeleteQuestionCommand = (commandId, id) => (
  startCommand(commandId, COMMAND_NAME.DELETE_QUESTION, id)
)
