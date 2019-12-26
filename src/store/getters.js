const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  exam: state => state.exam.exam,
  studentlist: state => state.exam.student,
  getlist: state => state.exam.getlist,
  examType: state => state.exam.examType,
  subject: state => state.exam.subject,
  search: state => state.exam.search,
  getStateList: state => state.classManagement.getStateList
}
export default getters
