const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  exam: state => state.exam.examlist,
  studentlist: state => state.exam.studentlist,
  getlist: state => state.exam.getlist,
  examType: state => state.exam.examType,
  subject: state => state.exam.subject
}
export default getters
