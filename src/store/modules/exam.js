import { exam, student, getlist, examType, subject, search } from '@/api/exam'

const state = {
  Effected: [], // 待批班级
  studentlist: [], // 待批班级试卷列表
  examlist: [], // 考试管理考试列表
  typelist: [], // 考试类型数据
  sublist: [], // 课程数据
  getGradId: null
}

const mutations = {
  updatalist: (state, payload) => {
    state.Effected = payload
  },
  upstudent: (state, payload) => {
    state.studentlist = payload
  },
  uplist: (state, payload) => {
    state.examlist = payload
  },
  uptypelist: (state, payload) => {
    state.typelist = payload
  },
  upsublist: (state, payload) => {
    state.sublist = payload
  },
  upmsearch: (state, payload) => {
    state.examlist = payload
  },
  getGradId: (state, payload) => {
    state.getGradId = payload
  }
}
const actions = {
  // 获取待批班级
  async getexam({ commit }, payload) {
    const res = await exam(payload)
    commit('updatalist', res.data)
  },
  // 待批班级试卷列表
  async getstudent({ commit }, payload) {
    const res = await student(payload)
    commit('upstudent', res.exam)
  },
  async getExamlist({ commit }, payload) {
    const res = await getlist(payload)
    commit('uplist', res.exam)
  },
  async gettypelist({ commit }, payload) {
    const res = await examType()
    // console.log("===========res======type",res.data)
    commit('uptypelist', res.data)
  },
  async getsublist({ commit }, payload) {
    const res = await subject()
    // console.log("===========res======subject",res.data)
    commit('upsublist', res.data)
  },
  async actionsearch({ commit }, payload) {
    const res = await search({ exam_id: payload.exam_name, subject_id: payload.subject_text })
    commit('upmsearch', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
