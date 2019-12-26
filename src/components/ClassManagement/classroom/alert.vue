<!--
 * @Author: your name
 * @Date: 2019-12-20 16:44:08
 * @LastEditTime : 2019-12-23 19:44:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassroomManagement\alert.vue
 -->
<template>
  <div>
    <button @click="open">+添加教室</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      addClassRoomActions: 'classManagement/addClassRoomActions'
    }),
    open() {
      this.$prompt('教室号', '添加班级', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        inputPattern: /\d{5}/,
        inputErrorMessage: '教室号不正确'
      })
        .then(({ value }) => {
          this.addClassRoomActions({ room_text: value })
          this.$message({
            type: 'success',
            message: '教室号是: ' + value
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 160px;
  height: 40px;
  font-size: 15px;
}
</style>
