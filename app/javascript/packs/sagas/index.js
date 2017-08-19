import { takeEvery, fork } from 'redux-saga/effects'

import { START_COMMAND, COMMAND } from '../actions/command'
import {
  getQuestionsSaga,
} from './question'

const sagaMap = {
  [COMMAND.GET_QUESTIONS]: getQuestionsSaga,
}

function* startCommand(action) {
  yield sagaMap[action.name](action.name, action.params)
}

export default function* () {
  yield fork(takeEvery, START_COMMAND, startCommand)
}
