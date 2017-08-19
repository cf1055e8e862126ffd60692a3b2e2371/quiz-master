import axios from 'axios'

let csrfToken
const getCsrfHeader = () => {
  if (!csrfToken) {
    csrfToken = document.querySelector('[name=csrf-token]').content
  }
  return {
    'X-CSRF-Token': csrfToken,
  }
}

export default {
  get: path => (
    axios.get(path)
  ),
  post: (path, resource) => (
    axios.post(path, resource, { headers: getCsrfHeader() })
  ),
  put: (path, resource) => (
    axios.put(path, resource, { headers: getCsrfHeader() })
  ),
  delete: path => (
    axios.delete(path, { headers: getCsrfHeader() })
  ),
}
