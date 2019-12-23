import request from '@/utils/request'


export function exam(params) {
    return request({
      url:'/manger/grade',
      method: 'get',
      params
    })
  }

//获取试卷列表
export function getlist(params){
  return request({
    url:'/exam/exam',
    method: 'get',
    params
  })
}

//获取考试类型
export function examType(){
  return request({
    url:'/exam/examType',
    method: 'get',
  })
}

//获取全部课程
export function subject(){
  return request({
    url:'/exam/subject',
    method: 'get',
  })
}

//学生待批试卷列表
export function student(params){
  return request({
    url:'/exam/student',
    method: 'get',
    params
  })
}