import { combineReducers } from 'redux'
import command from './command'
import questions from './questions'

export default combineReducers({
  command,
  questions,
})
