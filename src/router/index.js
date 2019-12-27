/*
 * @Author: your name
<<<<<<< HEAD
 * @Date: 2019-12-19 16:49:25
 * @LastEditTime : 2019-12-20 16:25:12
=======
 * @Date: 2019-12-19 16:27:04
 * @LastEditTime : 2019-12-19 16:44:27
>>>>>>> origin/whg
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
    // redirect: '/test',
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
    },
    {
      path: 'detail',
      name: 'detail',
      hidden: true,
      component: () => import('@/views/test/detail/index'),
      meta: { title: '试题详情' }
    },
    {
      path: 'edit',
      name: 'edit',
      hidden: true,
      component: () => import('@/views/test/edit/index'),
      meta: { title: '查看试题' }
    }]
  },
  {
    path: '/exam',
    component: Layout,
    redirect: '/exam/list',
    meta: { title: '考试管理', icon: 'dashboard' },
    children: [
      {
        path: 'exam',
        name: 'exam',
        component: () => import('@/views/exam/exam.vue'),
        meta: { title: '添加考试' }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/exam/list/index'),
        meta: { title: '试卷列表' }
      }
    ]
  },
  {
    path: '/addTheTest',
    component: Layout,
    // redirect: '/examManagement/addTheTest',
    name: 'addTheTest',
    meta: { title: '考试管理', icon: 'example' },
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
        meta: { title: '用户展示', icon: 'example' }
      }
    ]
  },
  {
    path: '/Marking',
    component: Layout,
    redirect: '/Marking/Mark',
    meta: { title: '阅卷管理', icon: 'dashboard' },
    children: [
      {
        path: '/Marking/Mark',
        name: 'Mark',
        component: () => import('@/views/Marking/Mark/index'),
        meta: { title: '试卷列表' }
      },
      {
        path: '/Marking/approval',
        name: 'approval',
        component: () => import('@/views/Marking/approval/index')
      }
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

  {
    path: '/classManagement',
    component: Layout,
    redirect: '/classManagement/classManagement',
    name: 'classManagement',
    meta: {
      title: '班级管理',
      icon: 'example'
    },
    children: [
      {
        path: 'classManagement',
        component: () => import('@/views/classManagement/classManagement'),
        name: 'classManagement',
        meta: { title: '班级管理', icon: 'example' }
      },
      {
        path: 'ClassroomManagement',
        component: () => import('@/views/classManagement/ClassroomManagement'),
        name: 'ClassroomManagement',
        meta: { title: '教室管理', icon: 'example' }
      },
      {
        path: 'studentManagement',
        component: () => import('@/views/classManagement/studentManagement'),
        name: 'studentManagement',
        meta: { title: '学生管理', icon: 'example' }
      }
    ]
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
