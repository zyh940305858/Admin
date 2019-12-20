import request from '@/utils/request'


export function exam(params) {
    return request({
      url:'/manger/grade',
      method: 'get',
      params
    })
  }

//学生试卷列表
export function student(params){
  return request({
    url:'/exam/student',
    method: 'get',
    params
  })
}