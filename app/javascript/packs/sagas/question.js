import { call, put } from 'redux-saga/effects'

import { successCommand, failCommand } from '../actions/command'
import {
  setQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} from '../actions/question'
import Api from '../apis/question'

export function* getQuestionsSaga(commandId, name) {
  try {
    const response = yield call(Api.getList)
    const questions = response.data
    yield put(setQuestions({ questions }))
    yield put(successCommand(commandId, name))
  } catch (e) {
    yield put(failCommand(commandId, name, 'Getting questions has been failed.'))
  }
}

export function* addQuestionSaga(commandId, name, { content, answer }) {
  try {
    const response = yield call(Api.add, { content, answer })
    yield put(addQuestion(response.data))
    yield put(successCommand(commandId, name))
  } catch (e) {
    yield put(failCommand(commandId, name, 'Adding question has been failed.'))
  }
}

export function* updateQuestionSaga(commandId, name, { id, content, answer }) {
  try {
    const response = yield call(Api.update, { id, content, answer })
    yield put(updateQuestion(response.data))
    yield put(successCommand(commandId, name))
  } catch (e) {
    yield put(failCommand(commandId, name, 'Updating question has been failed.'))
  }
}

export function* deleteQuestionSaga(commandId, name, id) {
  try {
    yield call(Api.delete, id)
    yield put(deleteQuestion(id))
    yield put(successCommand(commandId, name))
  } catch (e) {
    yield put(failCommand(commandId, name, 'Deleting question has been failed.'))
  }
}
