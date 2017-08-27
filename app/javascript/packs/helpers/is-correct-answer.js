import toNumber from './to-number'

/**
 * It returns number when str represents "valid" decimal number,
 * so such as float number or hex number returns NaN.
 */
const strictParseInt = (str) => {
  const intStr = parseInt(str, 10)
  if (isNaN(intStr) || String(intStr) !== str) {
    return NaN
  }
  return intStr
}

const isCorrectStrOrInt = (correctAnswer, judgedAnswer) => {
  const intCorrectAnswer = strictParseInt(correctAnswer)
  if (isNaN(intCorrectAnswer)) {
    return correctAnswer === judgedAnswer
  }
  const trimedAnswer = judgedAnswer.trim()
  return (
    intCorrectAnswer === strictParseInt(trimedAnswer) ||
    intCorrectAnswer === toNumber(trimedAnswer)
  )
}

/**
 * Check judgedAnswer is correctAnswer.
 * It considers with correctAnswer represents a number(int) or
 * contains a number.
 * If such a number exists, this number can be replaced by string number,
 * (If it contains multiple numbers, only one number can be replaced)
 * 
 * ex: 
 *     isCorrectAnswer('32', '32')
 *     => true
 *     isCorrectAnswer('32', 'thirty two')
 *     => true
 *     isCorrectAnswer('this is 32 apples', 'this is thirty two apples')
 *     => true
 */
const isCorrectAnswer = (correctAnswer, judgedAnswer) => {
  const correctAnswerWords = correctAnswer.split(' ')
  const numberStringIndex = correctAnswerWords.findIndex(answerWord => (
    !isNaN(strictParseInt(answerWord))
  ))
  if (numberStringIndex === -1) { return correctAnswer === judgedAnswer }
  const beforeNumber = (
    correctAnswerWords.slice(0, numberStringIndex).join(' ')
  )
  if (!judgedAnswer.startsWith(beforeNumber)) { return false }
  let candidate = judgedAnswer.slice(beforeNumber.length)
  const afterNumber = (
    correctAnswerWords.slice(numberStringIndex + 1).join(' ')
  )
  if (!candidate.endsWith(afterNumber)) { return false }
  candidate = candidate.slice(0, candidate.length - afterNumber.length)
  return isCorrectStrOrInt(
    correctAnswerWords[numberStringIndex], candidate,
  )
}

export default isCorrectAnswer
