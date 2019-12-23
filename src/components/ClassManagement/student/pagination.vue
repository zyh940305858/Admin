<!--
 * @Author: your name
 * @Date: 2019-12-23 08:38:10
 * @LastEditTime : 2019-12-23 11:06:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassManagement\student\pagination.vue
 -->
<template>
  <div>
    <el-pagination
      small
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[20, 40, 60, 80]"
      :page-size="firstListLength"
      layout="total,prev, pager, next,  sizes, jumper"
      :total="getOverStudentStateList_length"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      getOverStudentStateList_length: store =>
        store.classManagement.getOverStudentStateList_length
    })
  },
  methods: {
    ...mapMutations({
    //   getOverStudentMutationsList: "classManagement/getOverStudentMutationsList"
    }),
    // 每页多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //   当前第几页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    // this.getOverStudentMutationsList();
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      firstListLength:20
    };
  }
};
</script>

<style lang="scss" scoped>
</style>