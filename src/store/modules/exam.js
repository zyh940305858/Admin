import { exam, student, getlist, examType, subject, search} from '@/api/exam'

const state = {
  Effected: [],//待批班级
  studentlist: [],//待批班级试卷列表
  examlist: [],//考试管理考试列表
  typelist: [],//考试类型数据
  sublist: [],//课程数据
  getGradId:null
}

const mutations = {
  updatalist: (state, payload) => {
    state.Effected = payload
  },
  upstudent: (state, payload)=>{
    state.studentlist = payload
    // console.log(state.studentlist)

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
  upmsearch: (state, payload)=>{
    state.examlist = payload
  },
  getGradId: (state, payload)=>{
    state.getGradId=payload
  },
}
const actions = {
  //获取待批班级
  async getexam({ commit }, payload) {
    const res = await exam(payload)
    commit('updatalist', res.data)
    // console.log('===========待批班级=========',res.data)
  },
  //待批班级试卷列表
  async getstudent({ commit }, payload) {
    // console.log(payload,"dddddddddddd")
    const res = await student(payload)
    commit('upstudent', res.exam)
    // console.log('===========student======',res.exam)
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
  async actionsearch({ commit }, payload) {
    // console.log(payload.subject_text);
    const res = await search({exam_id:payload.exam_name,subject_id:payload.subject_text})
    commit('upmsearch', res.data)
    // console.log('===========student======',res.exam)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
