<!--
 * @Author: your name
 * @Date: 2019-12-19 16:43:45
 * @LastEditTime : 2019-12-21 07:47:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\views\classManagement\classManagement.vue
 -->
<template>
  <div class="classContainer">
    <p>班级管理</p>
    <ul>
     <!-- 弹框组件 -->
      <Alert/>
      <!-- 列表组件 -->
      <List :getStateList="getStateList"/>
    </ul>
  </div>
</template>
<script>
/**
 * @description: 引入弹框组件
 * @param {type} 
 * @return: ../../components/ClassManagement/class/list
 */
import List from "../../components/ClassManagement/class/list";
import Alert from "../../components/ClassManagement/class/alert";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
 components:{
   List,
   Alert
 },
  computed: {
    ...mapState({
      getStateList: store => store.classManagement.getStateList
    })
  },
 methods: {
    ...mapActions({
      getOverClassActionsList: "classManagement/getOverClassActionsList"
    }),
  },
  created() {
    this.getOverClassActionsList();
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
    margin-bottom:2rem;
    
  }
}
</style>
