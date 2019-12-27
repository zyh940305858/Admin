<!--
 * @Author: 王弘钢
 * @Date: 2019-12-19 21:29:48
 * @LastEditTime : 2019-12-27 10:12:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassManagement\class\alert.vue
 -->
<template>
  <div>
    <el-table :data="getstatelist" style="width: 100%">
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
          <span size="mini" class="writeColor" @click="handleEdit(scope.$index, scope.row)">编辑</span>
          |
          <span
            class="writeColor"
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</span>
        </template>
      </el-table-column>
    </el-table>
    <UpdateAlert :obj="obj" :dialogformvisible="dialogFormVisible" @flag="flag" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UpdateAlert from './updateAlert'
export default {
  components: {
    UpdateAlert
  },
  props: ['getstatelist'],
  data() {
    return {
      dialogFormVisible: false,
      obj: {}
    }
  },
  methods: {
    ...mapActions({
      deleteClassActions: 'classManagement/deleteClassActions'
    }),
    flag(flag) {
      this.dialogFormVisible = flag
    },
    handleEdit(index, row) {
      // 点击时将dialogFormVisible变为true，弹出弹框
      this.dialogFormVisible = true
      // console.log(index, row, '---------------handleEdit')
      // 点击时获取到grade_id和name
      this.obj = {
        grade_id: row.grade_id,
        grade_name: row.grade_name
      }
    },
    handleDelete(index, row) {
      // console.log(index, row, '---------------handleDelete')
      this.deleteClassActions({ grade_id: row.grade_id })
    }
  }
}
</script>

<style lang="scss" scoped>
.writeColor {
  color: #0139fd;
}
/deep/.el-table__header {
  background: #000;
}
</style>
