import { startCommand, COMMAND } from './command'

export const SET_QUESTIONS = 'SET_QUESTIONS'

export const setQuestions = ({ questions }) => ({
  type: SET_QUESTIONS,
  questions,
})

export const startGetQuestionsCommand = () => (
  startCommand(COMMAND.GET_QUESTIONS)
)
