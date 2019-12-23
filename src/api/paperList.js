/*
 * @Author: your name
 * @Date: 2019-12-20 14:46:44
 * @LastEditTime : 2019-12-20 14:53:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\api\examManagement.js
 */
import request from '@/utils/request'

export function getPaperList(params) {
  return request({
    url: '/user/user',
    method: 'get',
    params
  })
}
export function getIdentityList(params) {
  return request({
    url: '/user/identity',
    method: 'get',
    params
  })
}
export function getAuthorityList(params) {
  return request({
    url: '/user/api_authority',
    method: 'get',
    params
  })
}

export function getRelationList(params) {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get',
    params
  })
}export function getViewList(params) {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get',
    params
  })
}