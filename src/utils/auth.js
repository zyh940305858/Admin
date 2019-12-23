/*
 * @Author: your name
 * @Date: 2019-12-19 16:39:00
 * @LastEditTime: 2019-12-20 10:45:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\utils\auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
