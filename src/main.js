/*
 * @Author: your name
 * @Date: 2019-12-19 14:28:47
 * @LastEditTime : 2019-12-30 20:24:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\main.js
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import './styles/reset.css'
import '@/icons' // icon
import '@/permission' // permission control
import VueI18n from 'vue-i18n'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 * import { mockXHR } from '../mock'
 *  if (process.env.NODE_ENV === 'production') {
 *    mockXHR()
 *  }
 */

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./VueI18n/language-zh'),
    'en': require('./VueI18n/language-en')
  }
})
// Vue.prototype.$t = new Vue()
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
