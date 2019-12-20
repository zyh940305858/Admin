import { exam, student} from '@/api/exam'

const state = {
  examlist: [],
  studentlist:[]
}

const mutations = {
  updatalist: (state, payload) => {
    state.examlist = payload
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
