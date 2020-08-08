import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.25.197.146:3333'
})

export { api }
