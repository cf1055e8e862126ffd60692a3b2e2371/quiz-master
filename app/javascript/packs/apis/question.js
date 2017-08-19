import axios from 'axios'

const questionsPath = '/api/questions.json'

export default {
  getList: () => (
    axios.get(questionsPath)
  ),
}
