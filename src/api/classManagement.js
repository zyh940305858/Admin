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
// 全部已经分班同学数据
export function getOverStudentActionsList(params) {
  return request({
    url: '/manger/student',
    method: 'get',
    params
  })
}