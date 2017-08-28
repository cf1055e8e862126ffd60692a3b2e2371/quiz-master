import { combineReducers } from 'redux'
import commands from './commands'
import questions from './questions'

export default combineReducers({
  commands,
  questions,
})
