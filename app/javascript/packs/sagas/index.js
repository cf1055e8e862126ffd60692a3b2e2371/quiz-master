import { takeEvery, fork } from 'redux-saga/effects'

import { START_COMMAND } from '../actions/command'
import COMMAND_NAME from '../consts/command-name'
import {
  getQuestionsSaga,
  addQuestionSaga,
  updateQuestionSaga,
  deleteQuestionSaga,
} from './question'

const sagaMap = {
  [COMMAND_NAME.GET_QUESTIONS]: getQuestionsSaga,
  [COMMAND_NAME.ADD_QUESTION]: addQuestionSaga,
  [COMMAND_NAME.UPDATE_QUESTION]: updateQuestionSaga,
  [COMMAND_NAME.DELETE_QUESTION]: deleteQuestionSaga,
}

function* startCommand({ name, commandId, params }) {
  yield sagaMap[name](commandId, name, params)
}

export default function* () {
  yield fork(takeEvery, START_COMMAND, startCommand)
}
