import base from './base'

const questionsPath = '/api/questions'

export default {
  getList: () => (
    base.get(questionsPath)
  ),
  add: ({ content, answer }) => (
    base.post(questionsPath, { content, answer })
  ),
  update: ({ id, content, answer }) => (
    base.put(`${questionsPath}/${id}`, { content, answer })
  ),
  delete: id => (
    base.delete(`${questionsPath}/${id}`)
  ),
}
