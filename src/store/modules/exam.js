import { exam } from '@/api/exam'

const state = {
  examlist: []
}

const mutations = {
  updatalist: (state, payload) => {
    state.examlist = payload
  }
}
const actions = {
  async exam({ commit }, payload) {
    // console.log(111)
    const res = await exam(payload)
    await commit('updatalist', res.data)
    // console.log(res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
