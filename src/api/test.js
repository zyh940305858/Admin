import request from '@/utils/request'

// 获取所有的考试类型
export function gettesttype() {
  return request({
    url: '/exam/examType',
    method: 'get'
  })
}

// 获取所有课程类型
export function getcoursetype() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}

// 获取所有试题类型
export function getquestiontype() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get'
  })
}

// 添加试题
export function addtest(data) {
  const { stem, theme, testtype, coursetype, questiontype, answer, userid } = data
  return request({
    url: '/exam/questions',
    method: 'post',
    data: { title: stem, questions_stem: theme, exam_id: testtype, subject_id: coursetype, questions_type_id: questiontype, questions_answer: answer, user_id: userid }
  })
}

// 添加试题类型
export function insertquestiontype(data) {
  return request({
    url: '/exam/insertQuestionsType',
    method: 'post',
    data
  })
}

// 获取所有试题
export function selectalltest() {
  return request({
    url: '/exam/questions/new',
    method: 'get'
  })
}

// 按条件查询试题
export function selecttest(data) {
  const { questions_id, questions_type_id, subject_id, exam_id } = data
  return request({
    url: '/exam/questions/condition',
    method: 'get',
    params: {
      questions_id,
      questions_type_id,
      subject_id,
      exam_id
    }
  })
}

// 更新试题
export function updatetest(data) {
  return request({
    url: '/exam/questions/update',
    method: 'put',
    data
  })
}
