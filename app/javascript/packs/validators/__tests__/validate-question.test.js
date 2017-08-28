import validateQuestion from '../validate-question'

describe('when content and answer is not empty', () => {
  it('return empty object', () => {
    const error = validateQuestion({ content: 'hoge', answer: 'fuga' })
    expect(error.content).toBeFalsy()
    expect(error.answer).toBeFalsy()
  })
})

describe('when content is empty', () => {
  it('return content error', () => {
    const error = validateQuestion({ content: '', answer: 'fuga' })
    expect(error.content).toBeTruthy()
    expect(error.answer).toBeFalsy()
  })
})

describe('when answer is empty', () => {
  it('return answer error', () => {
    const error = validateQuestion({ content: 'hoge', answer: '' })
    expect(error.content).toBeFalsy()
    expect(error.answer).toBeTruthy()
  })
})

describe('when content and answer is empty', () => {
  it('return content and answer error', () => {
    const error = validateQuestion({ content: '', answer: '' })
    expect(error.content).toBeTruthy()
    expect(error.answer).toBeTruthy()
  })
})
