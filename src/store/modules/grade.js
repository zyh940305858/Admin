import { selectgrade, insertgrade, updatagrade, delategrade, selectclassroom, deleteclassroom, insertclassroom } from '@/api/grade.js'

const state = {
  gradelist: [],
  classroomlist: []
}

const mutations = {
  SET_GRADE: (state, data) => {
    state.gradelist = data
  },
  SET_CLASSROOM: (state, data) => {
    state.classroomlist = data
  }
}

const actions = {
  async getgradelist({ commit }) {
    const res = await selectgrade()
    commit('SET_GRADE', res.data)
  },
  async addgrade({ commit }, payload) {
    const res = await insertgrade(payload)
    console.log(res)
  },
  async editgrade({ commit }, payload) {
    const res = await updatagrade(payload)
    console.log(res)
  },
  async delgrade({ commit }, payload) {
    const res = await delategrade(payload)
    console.log(res)
  },
  async getclassroom({ commit }) {
    const res = await selectclassroom()
    commit('SET_CLASSROOM', res.data)
  },
  async delclassroom({ commit }, payload) {
    const res = await deleteclassroom(payload)
    console.log(res)
  },
  async addclassroom({ commit }, payload) {
    const res = await insertclassroom(payload)
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
