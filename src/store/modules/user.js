import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  userid: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USERID: (state, userid) => {
    state.userid = userid
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    const res = await login({ user_name: username, user_pwd: password })
    commit('SET_TOKEN', res.token)
    setToken(res.token)
  },

  // get user info
  async getInfo({ commit }) {
    const res = await getInfo()
    console.log(res)
    commit('SET_USERID', res.data.user_id)
  },

  // user logout
  logout({ commit }) {
    commit('SET_TOKEN', '')
    removeToken()
    resetRouter()
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

