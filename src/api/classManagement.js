/*
 * @Author: your name
 * @Date: 2019-12-20 09:57:14
 * @LastEditTime : 2019-12-23 19:43:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\api\classManagement.js
 */
import request from '@/utils/request'
// 全部班级数据
export function getOverClassActionsList(params) {
  return request({
    url: '/manger/grade',
    method: 'get',
    params
  })
}
// 全部教室数据
export function getOverClassroomActionsList(params) {
  return request({
    url: '/manger/room',
    method: 'get',
    params
  })
}
// 全部课程
export function getAllLessonsActionsList(params) {
  return request({
    url: '/exam/subject',
    method: 'get',
    params
  })
}
// 获取已经分配班级
export function getClassAndGradeActionsList(params) {
  return request({
    url: '/manger/grade',
    method: 'get',
    params
  })
}
// 全部已经分班同学数据
export function getOverStudentActionsList(params) {
  return request({
    url: '/manger/student',
    method: 'get',
    params
  })
}
// 添加班级
export function addClassActions(data) {
  return request({
    url: '/manger/grade',
    method: 'post',
    data
  })
}
// 删除班级
export function deleteClassActions(data) {
  console.log(data,'-----------------------------data');
  return request({
    url: '/manger/grade/delete',
    method: 'delete',
    data
  })
}
// 添加教室
export function addClassRoomActions(data) {
  return request({
    url: '/manger/room',
    method: 'post',
    data
  })
}
// 删除教室
export function deleteClassRoomActions(data) {
  return request({
    url: '/manger/room/delete',
    method: 'delete',
    data
  })
}
