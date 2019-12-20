import request from '@/utils/request'


export function exam(params) {
    return request({
      url:'/manger/grade',
      method: 'get',
      params
    })
  }