/*
 * @Author: your name
 * @Date: 2019-12-19 16:39:00
 * @LastEditTime: 2019-12-20 15:13:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import parper from './modules/paperList'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    parper
  },
  getters
})

export default store
