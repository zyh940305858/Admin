/*
 * @Author: your name
 * @Date: 2019-12-19 20:28:02
 * @LastEditTime : 2019-12-23 19:52:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\store\modules\classManagement.js
 */
import {
  getOverClassActionsList,
  getOverClassroomActionsList,
  getOverStudentActionsList,
  getAllLessonsActionsList,
  getClassAndGradeActionsList,
  addClassActions,
  deleteClassActions,
  addClassRoomActions,
  deleteClassRoomActions
} from '@/api/classManagement'
const state = {
  // 列表数据
  getStateList: [],
  // 全部教室数据
  getOverClassStateList: [],
  // 全部科目
  getAllLessonsStateList: [],
  // 获取所有已经分班的学生的接口
  getOverStudentStateList: [],
  // 获取已经分配教室的班级
  getClassAndGradeStateList: [],
  // 已经分班的学生数据的长度
  getOverStudentStateList_length:null,
}
const mutations = {
  getMutationsList(state, payload) {
    state.getStateList = payload.data
    // console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload----------------全部班级管理数据');
  },
  getOverClassMutationsist(state, payload) {
    state.getOverClassStateList = payload.data
    // console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------获取全部教室');
  },
  getOverStudentMutationsList(state, payload) {
    state.getOverStudentStateList = payload.data
    // console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------全部学生数据');
  //  console.log(payload.data.length,'数据的数量（长度）');
   state.getOverStudentStateList_length=payload.data.length;
// console.log(payload,'--------------------payload=====payload-------------');
  },
//   getStudentMutationsList(state, payload){
// let list=JSON.parse(JSON.stringify(state.getOverStudentStateList)).slice(0,20)
// console.log(JSON.parse(JSON.stringify(state.getOverStudentStateList)),'========================');
//   },
  getAllLessonsMutationsList(state, payload) {
    state.getAllLessonsStateList = payload.data
    // console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------获取全部科目');
  },
  getClassAndGradeMutationsList(state, payload) {
    state.getClassAndGradeStateList = payload.data
    // console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------分配教室的班级');
  },
}
const actions = {
  // 添加班级actions
  async addClassActions({ commit }, payload) { await addClassActions(payload)},
  // 删除班级actions
  async deleteClassActions({ commit }, payload) {await deleteClassActions(payload)},
  // 添加教室actions
  async addClassRoomActions({ commit }, payload) { await addClassRoomActions(payload)},
  // 删除教室actions
  async deleteClassRoomActions({ commit }, payload) {await deleteClassRoomActions(payload)},
  
  async getOverClassActionsList({ commit }, payload) {
    let res = await getOverClassActionsList()
    // 传到同步方法中
    commit("getMutationsList", res)
  },
  async getOverClassroomActionsList({ commit }, payload) {
    let res = await getOverClassroomActionsList()
    // 传到同步方法中
    commit("getOverClassMutationsist", res)
  },
  async getAllLessonsActionsList({ commit }, payload) {
    let res = await getAllLessonsActionsList()
    // 传到同步方法中
    commit("getAllLessonsMutationsList", res)
  },
  async getOverStudentActionsList({ commit }, payload) {
    let res = await getOverStudentActionsList()
    // 传到同步方法中
    commit("getOverStudentMutationsList", res)
  },
  async getClassAndGradeActionsList({ commit }, payload) {
    let res = await getClassAndGradeActionsList()
    // 传到同步方法中
    commit("getClassAndGradeMutationsList", res)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

