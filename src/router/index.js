/*
 * @Author: your name
 * @Date: 2019-12-19 16:49:25
 * @LastEditTime : 2019-12-20 16:25:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    // redirect: '/test',
    children: [{
      path: 'test',
      name: 'test',
      component: () => import('@/views/test/index'),
      meta: { title: 'Test', icon: 'dashboard' }
    }]
  },

  {
    path: '/addTheTest',
    component: Layout,
    // redirect: '/examManagement/addTheTest',
    name: 'addTheTest',
    meta: {title: '考试管理',icon: 'example'},
    children: [
      {
        path: 'addTheTest',
        component: () => import('../views/examManagement/addTheTest.vue'),
        name: 'addTheTest',
        meta: { title: '添加用户', icon: 'example' }
      },
      {
        path: 'paperList',
        component: () => import('../views/examManagement/paperList'),
        name: 'paperList',
        meta: { title: '用户展示', icon: 'example'},
      },
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   children: [{
  //     path: 'exam',
  //     name: 'exam',
  //     component: () => import('@/views/Exam/exam.vue'),
  //     meta: { title: 'exam', icon: 'dashboard' }
  //   }]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
