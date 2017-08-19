import { takeEvery, fork } from 'redux-saga/effects'

import { START_COMMAND, COMMAND } from '../actions/command'
import {
  getQuestionsSaga,
  addQuestionSaga,
  updateQuestionSaga,
  deleteQuestionSaga,
} from './question'

const sagaMap = {
  [COMMAND.GET_QUESTIONS]: getQuestionsSaga,
  [COMMAND.ADD_QUESTION]: addQuestionSaga,
  [COMMAND.UPDATE_QUESTION]: updateQuestionSaga,
  [COMMAND.DELETE_QUESTION]: deleteQuestionSaga,
}

function* startCommand(action) {
  yield sagaMap[action.name](action.name, action.params)
}

export default function* () {
  yield fork(takeEvery, START_COMMAND, startCommand)
}
