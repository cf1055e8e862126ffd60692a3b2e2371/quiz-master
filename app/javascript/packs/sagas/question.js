import { call, put } from 'redux-saga/effects'

import { successCommand, failCommand } from '../actions/command'
import { setQuestions } from '../actions/question'
import Api from '../apis/question'

export function* getQuestionsSaga(name) {
  try {
    const response = yield call(Api.getList)
    const questions = response.data
    yield put(setQuestions({ questions }))
    yield put(successCommand(name))
  } catch (e) {
    yield put(failCommand(name, 'Get questions has been failed.'))
  }
}
