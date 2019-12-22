/*
 * @Author: your name
 * @Date: 2019-12-19 20:28:02
 * @LastEditTime : 2019-12-22 21:41:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\store\modules\classManagement.js
 */
import {
  getOverClassActionsList,
  getOverClassroomActionsList,
  getOverStudentActionsList,
  getAllLessonsActionsList,
  getClassAndGradeActionsList
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
  getClassAndGradeStateList: []
}
const mutations = {
  getMutationsList(state, payload) {
    state.getStateList = payload.data
    console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload----------------全部班级管理数据');
  },
  getOverClassMutationsist(state, payload) {
    state.getOverClassStateList = payload.data
    console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------获取全部教室');
  },
  getOverStudentMutationsList(state, payload) {
    state.getOverStudentStateList = payload.data
    console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------全部学生数据');
  },
  getAllLessonsMutationsList(state, payload) {
    state.getAllLessonsStateList = payload.data
    console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------获取全部科目');
  },
  getClassAndGradeMutationsList(state, payload) {
    state.getClassAndGradeStateList = payload.data
    console.log(JSON.parse(JSON.stringify(payload.data)), '-----------payload---------------分配教室的班级');
  }
}
const actions = {
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

