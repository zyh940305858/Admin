import request from '@/utils/request'

//添加身份
export function addAuthor(params) {
    return request({
      url: '/user/identity/edit',
      method: 'get',
      params
    })
}

//添加用户
export function addYongHu(data){
    return request({
        url: '/user',
        method: 'post',
        data
    })
}

//添加api接口权限
export function authorityApi(params){
    return request({
        url: '/user/authorityApi/edit',
        method: 'get',
        params
    })
}

//添加视图权限
export function authorityView(params){
    return request({
        url: '/user/authorityView/edit',
        method: 'get',
        params
    })
}

//给身份设定api接口权限
export function setIdentityApi(params){
    return request({
        url: '/user/setIdentityApi',
        method: 'post',
        params
    })
}

//给身份设定视图权限
export function setIdentityView(params){
    return request({
        url: '/user/setIdentityView',
        method: 'post',
        params
    })
}