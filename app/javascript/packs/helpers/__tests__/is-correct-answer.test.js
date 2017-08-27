import isCorrectAnswer from '../is-correct-answer'

describe('when answer is not a/containing number', () => {
  const COLLECT_ANSWER = 'fuga piyo'

  test('return true for correct answer', () => {
    expect(isCorrectAnswer(COLLECT_ANSWER, 'fuga piyo')).toBe(true)
  })

  test('return false for not correct answer', () => {
    expect(isCorrectAnswer(COLLECT_ANSWER, 'piyo fuga')).toBe(false)
  })
})

describe('when answer is a number', () => {
  const COLLECT_ANSWER = '123456'

  test('return true for correct answer (by words)', () => {
    expect(isCorrectAnswer(
      COLLECT_ANSWER,
      'one hundred twenty three thousand four hundred fifty six',
    )).toBe(true)
  })

  test('return true for correct answer (by number)', () => {
    expect(isCorrectAnswer(COLLECT_ANSWER, '123456')).toBe(true)
  })

  test('return false for not correct answer', () => {
    expect(isCorrectAnswer(
      COLLECT_ANSWER,
      'one hundred twenty three thousand four hundred fifty seven',
    )).toBe(false)
  })
})

describe('when answer contains a number', () => {
  const COLLECT_ANSWER = 'this is 32 apples'

  test('return true for correct answer (by words)', () => {
    expect(isCorrectAnswer(
      COLLECT_ANSWER,
      'this is thirty two apples',
    )).toBe(true)
  })

  test('return true for correct answer (by number)', () => {
    expect(isCorrectAnswer(
      COLLECT_ANSWER,
      'this is 32 apples',
    )).toBe(true)
  })

  test('return false for not correct answer', () => {
    expect(isCorrectAnswer(
      COLLECT_ANSWER,
      'this is thirty one apples',
    )).toBe(false)
  })
})
