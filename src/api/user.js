import request from '@/utils/request'

// 登陆接口
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 获取当前用户信息
export function getInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

//
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
