/*
 * @Author: your name
 * @Date: 2019-12-24 20:44:46
 * @LastEditTime: 2019-12-24 20:54:13
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
import exam from './modules/exam'
import test from './modules/test'
import addpaperList from './modules/addpaperList'
import paperList from './modules/paperList'
import classManagement from './modules/classManagement'
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    exam,
    test,
    addpaperList,
    paperList,
    classManagement
  },
  getters
})

export default store
