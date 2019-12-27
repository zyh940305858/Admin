<!--
 * @Author: your name
 * @Date: 2019-12-19 17:03:51
 * @LastEditTime : 2019-12-27 09:46:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\views\classManagement\ClassroomManagement.vue
 -->
<template>
  <div class="classContainer">
    <p>学生管理</p>
    <!-- 搜索栏组件 -->
    <SearchBar
      :getoverstudentstatelist="getOverStudentStateList"
      :getoverclassstatelist="getOverClassStateList"
      :getclassandgradestatelist="getClassAndGradeStateList"
      @listInScb="listInScb"
    />
    <ul>
      <!-- 数据组件 -->
      <List
        :getoverstudentstatelist="getOverStudentStateList.slice(startCount,endCount)"
        :newgetoverstudentstatelist="newGetOverStudentStateList"
      />
      <Pagination @firstListLength="firstListLength" @pagVal="pagVal" />
    </ul>
  </div>
</template>
<script>
/**
 * @description: 引入弹框组件
 * @param {type}
 * @return:
 */
import List from '../../components/ClassManagement/student/list'
import SearchBar from '../../components/ClassManagement/student/searchBar'
import Pagination from '../../components/ClassManagement/student/pagination'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    List,
    SearchBar,
    Pagination
  },
  data() {
    return {
      startCount: 0,
      endCount: 10,
      cod: null,
      newGetOverStudentStateList: []
    }
  },
  computed: {
    ...mapState({
      getOverStudentStateList: store =>
        store.classManagement.getOverStudentStateList,
      getOverClassStateList: store =>
        store.classManagement.getOverClassStateList,
      getClassAndGradeStateList: store =>
        store.classManagement.getClassAndGradeStateList
    })
  },
  created() {
    this.getOverStudentActionsList()
    this.getOverClassroomActionsList()
    this.getClassAndGradeActionsList()
  },
  methods: {
    listInScb(room_text, grade_name, student_name) {
      const newGetOverStudentStateList = this.getOverStudentStateList.filter(
        item => {
          return (
            item.student_name === student_name ||
            item.grade_name === grade_name ||
            item.room_text === room_text
          )
        }
      )
      this.newGetOverStudentStateList = newGetOverStudentStateList
    },
    firstListLength(firstListLength) {
      this.endCount = firstListLength
      this.cod = firstListLength
    },
    pagVal(pagVal) {
      this.startCount = pagVal * this.cod
      this.endCount = pagVal * this.cod + this.cod
    },
    ...mapActions({
      getOverStudentActionsList: 'classManagement/getOverStudentActionsList',
      getOverClassroomActionsList:
        'classManagement/getOverClassroomActionsList',
      getClassAndGradeActionsList: 'classManagement/getClassAndGradeActionsList'
    })
  }
}
</script>
<style lang="scss" scoped>
.app-main{
  height: 100%;
}
.classContainer {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  p {
    width: 100%;
    height: 90px;
    line-height: 90px;
    font-size: 1.375rem;
  }
  ul {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 1rem;
    padding: 1.25rem;
    margin-bottom: 2rem;
    margin-top: 1px;
  }
}
</style>

