import axios from 'axios'

export const fetcher = (...arg) => (url) => {
  const method = arg?.method ?? 'get'
  const result = axios[method](url, ...arg).then((res) => res.data)
  return result
}
