<!--
 * @Author: 王弘钢
 * @Date: 2019-12-19 21:29:48
 * @LastEditTime : 2019-12-23 20:59:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassManagement\class\alert.vue
 -->
<template>
  <div>
    <el-table :data="getStateList" style="width: 100%">
      <el-table-column label="班级名" width="350">
        <template slot-scope="scope">
          <span>{{ scope.row.grade_name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="课程名" width="550" color="#f00">
        <template slot-scope="scope">
          <span>{{ scope.row.subject_text }}</span>
        </template>
      </el-table-column>

      <el-table-column label="教室号" width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.room_text }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="350">
        <template slot-scope="scope">
          <span size="mini" @click="handleEdit(scope.$index, scope.row)" class="writeColor">编辑</span>
          |
          <span
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            class="writeColor"
          >删除</span>
        </template>
      </el-table-column>
    </el-table>
    <UpdateAlert :dialogFormVisible="dialogFormVisible"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import UpdateAlert from './updateAlert'
export default {
  props: ["getStateList"],
  components:{
UpdateAlert
  },
  data() {
    return {
      dialogFormVisible:false
    };
  },
  methods: {
     ...mapActions({
      deleteClassActions: "classManagement/deleteClassActions"
    }),
    handleEdit(index, row) {
      this.dialogFormVisible = true
      console.log(index, row, "---------------handleEdit");
    },
    handleDelete(index, row) {
      console.log(index, row, "---------------handleDelete");
      this.deleteClassActions({grade_id:row.grade_id})
    }
  }
};
</script>

<style lang="scss" scoped>
.writeColor {
  color: #0139fd;
}
/deep/.el-table__header {
  background: #000;
}
</style>