import { call, put } from 'redux-saga/effects'
import { successCommand, failCommand } from '../../actions/command'
import COMMAND_NAME from '../../consts/command-name'
import {
  setQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} from '../../actions/question'
import Api from '../../apis/question'
import {
  getQuestionsSaga,
  addQuestionSaga,
  updateQuestionSaga,
  deleteQuestionSaga,
} from '../question'

const commandId = 1

describe('#getQuestionsSaga', () => {
  const commandName = COMMAND_NAME.GET_QUESTIONS
  describe('when api returns questions', () => {
    it('should put setQuestions(), successCommand()', () => {
      const questions = []
      const gen = getQuestionsSaga(commandId, commandName)
      expect(gen.next().value).toMatchObject(call(Api.getList))
      expect(gen.next({ data: questions }).value).toMatchObject(
        put(setQuestions({ questions })),
      )
      expect(gen.next().value).toMatchObject(
        put(successCommand(commandId, commandName)),
      )
    })
  })

  describe('when api throw exception', () => {
    it('should put failCommand()', () => {
      const gen = getQuestionsSaga(commandId, commandName)
      const errorMsg = 'hoge'
      expect(gen.next().value).toMatchObject(call(Api.getList))
      expect(gen.throw(new Error(errorMsg)).value).toMatchObject(
        put(failCommand(commandId, commandName, errorMsg)),
      )
    })
  })
})

describe('#addQuestionSaga', () => {
  const commandName = COMMAND_NAME.ADD_QUESTION
  const question = { content: 'fugafuga', answer: 'fuga' }
  describe('when api returns question', () => {
    it('should put addQuestion(), successCommand()', () => {
      const gen = addQuestionSaga(commandId, commandName, question)
      expect(gen.next().value).toMatchObject(call(Api.add, question))
      expect(gen.next({ data: question }).value).toMatchObject(
        put(addQuestion(question)),
      )
      expect(gen.next().value).toMatchObject(
        put(successCommand(commandId, commandName)),
      )
    })
  })

  describe('when api throw exception', () => {
    it('should put failCommand()', () => {
      const gen = addQuestionSaga(commandId, commandName, question)
      const errorMsg = 'hoge'
      expect(gen.next().value).toMatchObject(call(Api.add, question))
      expect(gen.throw(new Error(errorMsg)).value).toMatchObject(
        put(failCommand(commandId, commandName, errorMsg)),
      )
    })
  })
})

describe('#updateQuestionSaga', () => {
  const commandName = COMMAND_NAME.UPDATE_QUESTION
  const question = { id: 2, content: 'fugafuga', answer: 'fuga' }
  describe('when api returns question', () => {
    it('should put updateQuestion(), successCommand()', () => {
      const gen = updateQuestionSaga(commandId, commandName, question)
      expect(gen.next().value).toMatchObject(call(Api.update, question))
      expect(gen.next({ data: question }).value).toMatchObject(
        put(updateQuestion(question)),
      )
      expect(gen.next().value).toMatchObject(
        put(successCommand(commandId, commandName)),
      )
    })
  })

  describe('when api throw exception', () => {
    it('should put failCommand()', () => {
      const gen = updateQuestionSaga(commandId, commandName, question)
      const errorMsg = 'hoge'
      expect(gen.next().value).toMatchObject(call(Api.update, question))
      expect(gen.throw(new Error(errorMsg)).value).toMatchObject(
        put(failCommand(commandId, commandName, errorMsg)),
      )
    })
  })
})

describe('#deleteQuestionSaga', () => {
  const commandName = COMMAND_NAME.DELETE_QUESTION
  const questionId = 2
  describe('when api does not throw question', () => {
    it('should put deleteQuestion(), successCommand()', () => {
      const gen = deleteQuestionSaga(commandId, commandName, questionId)
      expect(gen.next().value).toMatchObject(call(Api.delete, questionId))
      expect(gen.next().value).toMatchObject(
        put(deleteQuestion(questionId)),
      )
      expect(gen.next().value).toMatchObject(
        put(successCommand(commandId, commandName)),
      )
    })
  })

  describe('when api throw exception', () => {
    it('should put failCommand()', () => {
      const gen = deleteQuestionSaga(commandId, commandName, questionId)
      const errorMsg = 'hoge'
      expect(gen.next().value).toMatchObject(call(Api.delete, questionId))
      expect(gen.throw(new Error(errorMsg)).value).toMatchObject(
        put(failCommand(commandId, commandName, errorMsg)),
      )
    })
  })
})
