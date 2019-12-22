/*
 * @Author: your name
 * @Date: 2019-12-19 20:28:02
 * @LastEditTime : 2019-12-20 20:26:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\store\modules\classManagement.js
 */
import { getOverClassActionsList,getOverClassroomActionsList,getOverStudentActionsList } from '@/api/classManagement'
const state = {
    // 列表数据
    getStateList: [],
    // 全部教室数据
    getOverClassStateList:[],
    getOverStudentStateList:[]
}
const mutations = {
    getMutationsList(state, payload) {
      state.getStateList=payload.data
      console.log(JSON.parse(JSON.stringify(payload.data)),'-----------payload----------------全部班级管理数据');
    },
    getOverClassMutationsist(state, payload) {
      state.getOverClassStateList=payload.data
      console.log(JSON.parse(JSON.stringify(payload.data)),'-----------payload---------------获取全部教室');
    },
    getOverStudentMutationsList(state, payload) {
      state.getOverStudentStateList=payload.data
      console.log(JSON.parse(JSON.stringify(payload.data)),'-----------payload---------------获取全部教室');
    }
}
const actions = {
    // 请求betterscroll异步方法
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
    async getOverStudentActionsList({ commit }, payload) {
        let res = await getOverStudentActionsList()
        // 传到同步方法中
        commit("getOverStudentMutationsList", res)
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

