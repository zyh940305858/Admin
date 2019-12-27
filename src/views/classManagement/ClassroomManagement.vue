<!--
 * @Author: your name
 * @Date: 2019-12-19 17:03:51
 * @LastEditTime : 2019-12-27 09:53:58
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
      <List :getoverclassstatelist="getOverClassStateList" />
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

