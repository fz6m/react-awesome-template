import request from '@/utils/request'

export function get(query) {
  return request({
    url: '/get',
    method: 'get',
    params: query,
  })
}

export function post(data) {
  return request({
    url: '/post',
    method: 'post',
    data,
  })
}
