const validateQuestion = ({ content, answer }) => {
  const errors = {}
  if (content.length === 0) {
    errors.content = 'Content should not be empty'
  }
  if (answer.length === 0) {
    errors.answer = 'Answer should not be empty'
  }
  return errors
}

export default validateQuestion;
