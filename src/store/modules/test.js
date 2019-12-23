import { gettesttype, getcoursetype, getquestiontype, addtest, insertquestiontype, selectalltest, selecttest } from '@/api/test'

const state = {
  testtypelist: [],
  coursetypelist: [],
  questiontypelist: [],
  testlist: [],
  detaildata: {}
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
  },

  SET_TESTLIST: (state, data) => {
    state.testlist = data
  },

  SET_DETAILDATA: (state, data) => {
    state.detaildata = data
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
  },

  async getalltest({ commit }, payload) {
    const res = await selectalltest()
    commit('SET_TESTLIST', res.data)
    console.log(res)
  },

  async getdetailtest({ commit }, payload) {
    const res = await selecttest(payload)
    console.log(res)
    commit('SET_DETAILDATA', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
