import request from '@/utils/request'

//获取所有用户信息
export function authorAll() {
    return request({
      url: '/user/user',
      method: 'get'
    })
}
  
//获取身份信息
export function authorIDentity() {
    return request({
        url: '/user/identity',
        method: 'get'
    })
}

//获取api接口权限数据
export function authorityApi(){
  return request({
    url: '/user/api_authority',
    method: 'get'
  })
}

//获取身份和api权限关系数据
export function authorGuanXi(){
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get'
  })
}

//获取视图权限数据
export function viesQuanXI(){
  return request({
    url: "/user/view_authority",
    method: 'get'
  })
}

//展示身份和视图权限关系
export function authorViews(){
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get'
  })
}