<!--
 * @Author: your name
 * @Date: 2019-12-23 08:38:10
 * @LastEditTime : 2019-12-25 08:47:59
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
      :current-page="currentPage1"
      :page-sizes="[firstListLength, firstListLength*2, firstListLength*3, firstListLength*4]"
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
    this.$emit('firstListLength',val)

    },
    //   当前第几页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    this.$emit('pagVal',val-1)

    }
  },
  created() {
    // this.getOverStudentMutationsList();
    this.$emit('firstListLength',this.firstListLength)
  },
  data() {
    return {
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      firstListLength:10
    };
  }
};
</script>

<style lang="scss" scoped>
</style>