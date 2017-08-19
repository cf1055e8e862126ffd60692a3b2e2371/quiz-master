import axios from 'axios'

const questionsPath = '/api/questions'

export default {
  getList: () => (
    axios.get(questionsPath)
  ),
  add: ({ content, answer }) => (
    axios.post(questionsPath, { content, answer })
  ),
  update: ({ id, content, answer }) => (
    axios.put(`${questionsPath}/${id}`, { content, answer })
  ),
  delete: id => (
    axios.delete(`${questionsPath}/${id}`)
  ),
}
