import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiac               hen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: trueif set true, will always show the root menu
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
    redirect: '/test'
  },

  {
    path: '/test',
    component: Layout,
    redirect: '/test/add',
    meta: { title: '试题管理', icon: 'dashboard' },
    children: [{
      path: 'add',
      name: 'add',
      component: () => import('@/views/test/add/index'),
      meta: { title: '添加试题' }
    },
    {
      path: 'category',
      name: 'category',
      component: () => import('@/views/test/category/index'),
      meta: { title: '试题分类' }
    },
    {
      path: 'check',
      name: 'check',
      component: () => import('@/views/test/check/index'),
      meta: { title: '查看试题' }
    }]
  },

  {
    path: '/class',
    component: Layout,
    redirect: '/grade/grade',
    meta: { title: '班级管理', icon: 'example' },
    children: [{
      path: 'grade',
      name: 'grade',
      component: () => import('@/views/grade/grade/index'),
      meta: { title: '班级管理' }
    },
    {
      path: 'classroom',
      name: 'classroom',
      component: () => import('@/views/grade/classroom/index'),
      meta: { title: '教室管理' }
    },
    {
      path: 'student',
      name: 'student',
      component: () => import('@/views/grade/student/index'),
      meta: { title: '学生管理' }
    }]
  },

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