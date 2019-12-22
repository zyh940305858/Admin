<!--
 * @Author: your name
 * @Date: 2019-12-19 17:03:51
 * @LastEditTime : 2019-12-22 21:34:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\views\classManagement\ClassroomManagement.vue
 -->
<template>
  <div class="classContainer">
    <p>学生管理</p>
    <SearchBar
      :getOverClassStateList="getOverClassStateList"
      :getClassAndGradeStateList="getClassAndGradeStateList"
    />
    <ul>
      <!-- 搜索栏组件 -->
      <!-- 数据组件 -->
      <List :getOverStudentStateList="getOverStudentStateList " />
    </ul>
  </div>
</template>
<script>
/**
 * @description: 引入弹框组件
 * @param {type}
 * @return: s
 */
import List from "../../components/ClassManagement/student/list";
import SearchBar from "../../components/ClassManagement/student/searchBar";
// import Alert from "../../components/ClassManagement/classroom/alert";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  components: {
    List,
    SearchBar
    //  Alert
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
  methods: {
    ...mapActions({
      getOverStudentActionsList: "classManagement/getOverStudentActionsList",
      getOverClassroomActionsList:
        "classManagement/getOverClassroomActionsList",
      getClassAndGradeActionsList: "classManagement/getClassAndGradeActionsList"
    })
  },
  created() {
    this.getOverStudentActionsList();
    this.getOverClassroomActionsList();
    this.getClassAndGradeActionsList();
  }
};
</script>
<style lang="scss" scoped>
.classContainer {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  p {
    width: 100%;
    height: 5.625rem;
    font-size: 1.375rem;
    display: flex;
    align-items: center;
  }
  ul {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 1rem;
    padding: 1.25rem;
    margin-bottom: 2rem;
  }
}
</style>

