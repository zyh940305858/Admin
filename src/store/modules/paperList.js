import {
  authorAll,
  authorIDentity,
  authorityApi,
  authorGuanXi,
  authorViews,
  viesQuanXI
} from '@/api/paperList'

const state = {
  examS: [], // 所有用户信息数据
  userNPID: [], // 所有展示身份数据
  userlength: '', // 用户信息数据的长度
  authorlenght: '', // 身份数据的长度
  apiALL: [], // 所有api接口权限数据
  apilength: '', // 所有api接口权限数据长度
  allGuanXi: [], // 获取身份和api权限关系数据
  allGuanXilength: '', // 身份和api权限关系数据长度
  allAuthorViews: [], // 所有身份和视图权限关系数据
  allAuthorViewslength: '', // 所有身份和视图权限关系数据的长度
  allViewsQX: [], // 获取视图权限数据的所有数据
  allViewsQXlength: '', // 获取视图权限数据的所有数据的长度
  allShenFen: [], // 更新用户的所有身份名字
  shenfen: [] // 更新用户的所有身份
}

const mutations = {
  // 所有用户信息数据
  SET_EXAMS(state, payload) {
    state.examS = payload
    state.userlength = state.examS.length

    // 名字
    const names = state.examS.map(item => item.user_name)
    state.allShenFen = Array.from(new Set(names))

    // 身份
    console.log(state.examS)
    const shenfen = state.examS.map(item => item.identity_text)
    state.shenfen = Array.from(new Set(shenfen))
  },

  // 展示身份数据
  SET_EXAMF(state, payload) {
    state.userNPID = payload
    state.authorlenght = state.userNPID.length
  },

  // 所有api接口权限数据
  SET_API(state, payload) {
    state.apiALL = payload
    state.apilength = state.apiALL.length
  },

  // 获取身份和api权限关系数据
  SET_GuanXi(state, payload) {
    state.allGuanXi = payload
    state.allGuanXilength = state.allGuanXi.length
  },

  // 展示身份和视图权限关系
  SET_AUTHORV(state, payload) {
    state.allAuthorViews = payload
    state.allAuthorViewslength = state.allAuthorViews.length
  },

  // 获取视图权限数据
  SET_VIEWAQX(state, payload) {
    state.allViewsQX = payload
    state.allViewsQXlength = state.allViewsQX.length
  }
}

const actions = {
  // 获取所有的用户信息
  async authorAll({ commit }) {
    const res = await authorAll()
    commit('SET_EXAMS', res.data)
  },
  // 获取身份数据
  async authorIDentity({ commit }) {
    const res = await authorIDentity()
    commit('SET_EXAMF', res.data)
  },
  // 获取所有api接口权限数据
  async authorityApi({ commit }) {
    const res = await authorityApi()
    commit('SET_API', res.data)
  },
  // 获取身份和api权限关系数据
  async authorGuanXi({ commit }) {
    const res = await authorGuanXi()
    // console.log(res,'athers')
    commit('SET_GuanXi', res.data)
  },
  // 展示身份和视图权限关系
  async authorViews({ commit }) {
    const res = await authorViews()
    commit('SET_AUTHORV', res.data)
  },
  // 获取视图权限数据
  async viesQuanXI({ commit }) {
    const res = await viesQuanXI()
    commit('SET_VIEWAQX', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
