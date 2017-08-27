import React from 'react'
import TestUtils from 'react-dom/test-utils'
import QuizBody from '../quiz-body'

describe('#isCorrectAnswer', () => {
  const setComponent = (correctAnswer, userAnswer) => {
    const component = TestUtils.renderIntoDocument(
      <QuizBody
        question={{ content: 'hoge', answer: correctAnswer }}
        page={1}
      />,
    )
    component.setState({ answer: userAnswer })
    return component
  }

  const subject = component => (
    component.isCorrectAnswer()
  )

  describe('when answer is not a/containing number', () => {
    const COLLECT_ANSWER = 'fuga piyo'

    test('return true for correct answer', () => {
      const component = setComponent(COLLECT_ANSWER, 'fuga piyo')
      expect(subject(component)).toBe(true)
    })

    test('return false for not correct answer', () => {
      const component = setComponent(COLLECT_ANSWER, 'piyo fuga')
      expect(subject(component)).toBe(false)
    })
  })

  describe('when answer is a number', () => {
    const COLLECT_ANSWER = '123456'

    test('return true for correct answer (by words)', () => {
      const component = setComponent(
        COLLECT_ANSWER,
        'one hundred twenty three thousand four hundred fifty six',
      )
      expect(subject(component)).toBe(true)
    })

    test('return true for correct answer (by number)', () => {
      const component = setComponent(COLLECT_ANSWER, '123456')
      expect(subject(component)).toBe(true)
    })

    test('return false for not correct answer', () => {
      const component = setComponent(
        COLLECT_ANSWER,
        'one hundred twenty three thousand four hundred fifty seven',
      )
      expect(subject(component)).toBe(false)
    })
  })

  describe('when answer contains a number', () => {
    const COLLECT_ANSWER = 'this is 32 apples'

    test('return true for correct answer (by words)', () => {
      const component = setComponent(
        COLLECT_ANSWER,
        'this is thirty two apples',
      )
      expect(subject(component)).toBe(true)
    })

    test('return true for correct answer (by number)', () => {
      const component = setComponent(COLLECT_ANSWER, 'this is 32 apples')
      expect(subject(component)).toBe(true)
    })

    test('return false for not correct answer', () => {
      const component = setComponent(
        COLLECT_ANSWER,
        'this is thirty one apples',
      )
      expect(subject(component)).toBe(false)
    })
  })
})
