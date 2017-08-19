import axios from 'axios'

const questionsPath = '/api/questions'

export default {
  getList: () => (
    axios.get(questionsPath)
  ),
}
