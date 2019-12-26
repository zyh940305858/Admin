<!--
 * @Author: your name
 * @Date: 2019-12-20 16:43:55
 * @LastEditTime : 2019-12-23 19:53:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassroomManagement\list.vue
 -->
<template>
  <div>
    <el-table :data="getOverClassStateList" style="width: 100%">
      <el-table-column label="教室号" width="770">
        <template slot-scope="scope">
          <span>{{ scope.row.room_text }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="770">
        <template slot-scope="scope">
          <span size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['getOverClassStateList'],
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      deleteClassRoomActions: 'classManagement/deleteClassRoomActions'
    }),
    handleDelete(index, row) {
      console.log(index, row, '---------------handleDelete')
      this.deleteClassRoomActions({ room_id: row.room_id })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-table__header {
  background: #000;
}
</style>
