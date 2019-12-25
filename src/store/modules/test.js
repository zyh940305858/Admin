import { gettesttype, getcoursetype, getquestiontype, addtest, insertquestiontype, selectalltest, selecttest, updatetest } from '@/api/test'

const state = {
  testtypelist: [], // 试题类型列表
  coursetypelist: [], // 课程类型列表
  questiontypelist: [], // 题目类型列表
  testlist: [], // 试题列表
  detaildata: {} // 试题详情数据
}

const mutations = {

  // 设置试题类型列表
  SET_TESTTYPELIST: (state, data) => {
    state.testtypelist = data
  },

  // 设置课程类型列表
  SET_COURSETYPE: (state, data) => {
    state.coursetypelist = data
  },

  // 设置提示类型列表
  SET_QUESTIONTYPE: (state, data) => {
    state.questiontypelist = data
  },

  // 设置试题列表
  SET_TESTLIST: (state, data) => {
    state.testlist = data
  },

  // 设置详情数据
  SET_DETAILDATA: (state, data) => {
    state.detaildata = data
  }
}

const actions = {

  // 获取试题类型
  async gettesttype({ commit }) {
    const res = await gettesttype()
    commit('SET_TESTTYPELIST', res.data)
  },

  // 获取课程类型
  async getcoursetype({ commit }) {
    const res = await getcoursetype()
    commit('SET_COURSETYPE', res.data)
  },

  // 获取问题类型
  async getquestiontype({ commit }) {
    const res = await getquestiontype()
    commit('SET_QUESTIONTYPE', res.data)
  },

  // 添加题目
  async addtestquestion({ commit }, payload) {
    const res = await addtest(payload)
    console.log(res)
  },

  // 添加题目类型
  async addquestiontype({ commit }, payload) {
    const res = await insertquestiontype(payload)
    console.log(res)
  },

  // 获取所有试题
  async getalltest({ commit }, payload) {
    const res = await selectalltest()
    commit('SET_TESTLIST', res.data)
    console.log(res)
  },

  // 获取试题详情
  async getdetailtest({ commit }, payload) {
    const res = await selecttest(payload)
    console.log(res)
    commit('SET_DETAILDATA', res.data)
  },

  // 编辑试题
  async edittest({ commit }, payload) {
    const res = await updatetest(payload)
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
