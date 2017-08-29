import questionsReducer from '../questions'
import {
  setQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} from '../../actions/question'

const getQuestions = () => (
  [
    {
      id: 1,
      content: 'hogehoge',
      answer: 'hoge',
    }, {
      id: 2,
      content: 'fugafuga',
      answer: 'fuga',
    },
  ]
)

describe('SET_QUESTIONS', () => {
  it('should set questions', () => {
    const questions = questionsReducer(
      undefined, setQuestions({ questions: getQuestions() }),
    )
    expect(questions).toMatchObject(getQuestions())
  })
})

describe('ADD_QUESTION', () => {
  it('should add question', () => {
    const questions = questionsReducer(
      getQuestions(), addQuestion({
        id: 3,
        content: 'piyopiyo',
        answer: 'piyo',
      }),
    )
    expect(questions).toMatchObject([
      {
        id: 1,
        content: 'hogehoge',
        answer: 'hoge',
      }, {
        id: 2,
        content: 'fugafuga',
        answer: 'fuga',
      }, {
        id: 3,
        content: 'piyopiyo',
        answer: 'piyo',
      },
    ])
  })
})

describe('UPDATE_QUESTION', () => {
  it('should update target question', () => {
    const questions = questionsReducer(
      getQuestions(), updateQuestion({
        id: 2,
        content: 'piyopiyo',
        answer: 'piyo',
      }),
    )
    expect(questions).toMatchObject([
      {
        id: 1,
        content: 'hogehoge',
        answer: 'hoge',
      }, {
        id: 2,
        content: 'piyopiyo',
        answer: 'piyo',
      },
    ])
  })
})

describe('DELETE_QUESTION', () => {
  it('should delete target question', () => {
    const questions = questionsReducer(
      getQuestions(), deleteQuestion(1),
    )
    expect(questions).toMatchObject([
      {
        id: 2,
        content: 'fugafuga',
        answer: 'fuga',
      },
    ])
  })
})
