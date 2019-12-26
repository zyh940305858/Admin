<!--
 * @Author: your name
 * @LastEditTime : 2019-12-25 16:52:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassManagement\class\alert.vue
 -->
<template>
  <div>
    <el-table
      :data="newGetOverStudentStateList==![]?getOverStudentStateList:newGetOverStudentStateList"
      style="width: 100%"
    >
      <el-table-column label="姓名" width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.student_name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="学号" width="350" color="#f00">
        <template slot-scope="scope">
          <span>{{ scope.row.student_id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班级" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.grade_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="教室" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.room_text }}</span>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="400">
        <template slot-scope="scope">
          <span>{{ scope.row.student_pwd }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <span
            size="mini"
            type="danger"
            class="writeColor"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['getOverStudentStateList', 'newGetOverStudentStateList'],
  data() {
    return {
      list: []
    }
  },
  methods: {
    ...mapActions({
      deleteStudentActions: 'classManagement/deleteStudentActions'
    }),
    handleEdit(index, row) {
      console.log(index, row, '---------------handleEdit')
    },
    handleDelete(index, row) {
      // console.log(index, row.student_id, '---------------handleDelete');
      this.deleteStudentActions({ id: row.student_id })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-table__header {
  background: #000;
}
</style>
