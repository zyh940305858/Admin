<!--
 * @Author: your name
 * @Date: 2019-12-19 17:03:51
 * @LastEditTime : 2019-12-25 16:11:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\views\classManagement\ClassroomManagement.vue
 -->
<template>
  <div class="classContainer">
    <p>班级管理</p>
    <ul>
      <!-- 弹框组件 -->
      <Alert />
      <!-- 数据组件 -->
      <List :getOverClassStateList="getOverClassStateList" />
    </ul>
  </div>
</template>
<script>
/**
 * @description: 引入弹框组件
 * @param {type}
 * @return: ../../components/ClassManagement/class/list
 */
import List from '../../components/ClassManagement/classroom/list'
import Alert from '../../components/ClassManagement/classroom/alert'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    List,
    Alert
  },
  computed: {
    ...mapState({
      getOverClassStateList: store =>
        store.classManagement.getOverClassStateList
    })
  },
  created() {
    this.getOverClassroomActionsList()
  },
  methods: {
    ...mapActions({
      getOverClassroomActionsList: 'classManagement/getOverClassroomActionsList'
    })
  }
}
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

