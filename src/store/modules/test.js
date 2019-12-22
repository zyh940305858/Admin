import { gettesttype, getcoursetype, getquestiontype, addtest, insertquestiontype } from '@/api/test'

const state = {
  testtypelist: [],
  coursetypelist: [],
  questiontypelist: []
}

const mutations = {
  SET_TESTTYPELIST: (state, data) => {
    state.testtypelist = data
  },

  SET_COURSETYPE: (state, data) => {
    state.coursetypelist = data
  },

  SET_QUESTIONTYPE: (state, data) => {
    state.questiontypelist = data
  }
}

const actions = {
  async gettesttype({ commit }) {
    const res = await gettesttype()
    commit('SET_TESTTYPELIST', res.data)
  },

  async getcoursetype({ commit }) {
    const res = await getcoursetype()
    commit('SET_COURSETYPE', res.data)
  },

  async getquestiontype({ commit }) {
    const res = await getquestiontype()
    commit('SET_QUESTIONTYPE', res.data)
  },

  async addtestquestion({ commit }, payload) {
    const res = await addtest(payload)
    console.log(res)
  },

  async addquestiontype({ commit }, payload) {
    const res = await insertquestiontype(payload)
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
