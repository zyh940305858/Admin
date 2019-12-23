import { exam, student, getlist, examType, subject} from '@/api/exam'

const state = {
  examlist: [],
  studentlist: [],
  examlist: [],
  typelist: [],//考试类型数据
  sublist: []//课程数据
}

const mutations = {
  updatalist: (state, payload) => {
    state.examlist = payload
  },
  uplist: (state, payload)=>{
    state.examlist = payload
  },
  uptypelist: (state, payload) => {
    state.typelist = payload
  },
  upsublist: (state, payload) => {
    state.sublist = payload
  },
  student: (state, payload)=>{
    state.studentlist = payload
  }
}
const actions = {
  async exam({ commit }, payload) {
    const res = await exam(payload)
    commit('updatalist', res.data)
    // console.log('===========exam=========',res.data)
  },
  async getExamlist({ commit }, payload){
    const res = await getlist(payload)
    // console.log(res)
    commit('uplist', res.exam)

  },
  async gettypelist({ commit }, payload){
    const res = await examType()
    // console.log("=============gettypelist========",res)
    commit('uptypelist', res.data)
  },
  async getsublist({ commit }, payload){
    const res = await subject()
    // console.log("=============getsublist========",res)
    commit('upsublist', res.data)
  },
  async student({ commit }, payload) {
    const res = await student(payload)
    commit('student', res.exam)
    // console.log('===========student======',res.exam)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
