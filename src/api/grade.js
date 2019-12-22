import request from '@/utils/request'

// 获取已分配班级信息
export function selectgrade() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

// 添加班级接口
export function insertgrade(data) {
  console.log(data)
  return request({
    url: '/manger/grade',
    method: 'post',
    data
  })
}

// 修改班级信息
export function updatagrade(data) {
  return request({
    url: '/manger/grade/update',
    method: 'put',
    data
  })
}

// 删除班级
export function delategrade(id) {
  return request({
    url: '/manger/grade/delete',
    method: 'delete',
    data: { grade_id: id }
  })
}

// 获取所有教室
export function selectclassroom() {
  return request({
    url: '/manger/room',
    method: 'get'
  })
}

// 删除教室
export function deleteclassroom(id) {
  return request({
    url: '/manger/room/delete',
    method: 'delete',
    data: { room_id: id }
  })
}

// 添加教室
export function insertclassroom(data) {
  return request({
    url: '/manger/room',
    method: 'post',
    data
  })
}
