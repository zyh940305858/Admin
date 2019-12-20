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

export function getquestiontype() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get'
  })
}

export function addtest(data) {
  const { stem, theme, testtype, coursetype, questiontype, answer, userid } = data
  return request({
    url: '/exam/questions',
    method: 'post',
    data: { title: stem, questions_stem: theme, exam_id: testtype, subject_id: coursetype, questions_type_id: questiontype, questions_answer: answer, user_id: userid }
  })
}
