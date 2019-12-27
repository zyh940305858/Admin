<!--
 * @Author: your name
 * @Date: 2019-12-22 20:36:54
 * @LastEditTime : 2019-12-27 09:58:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\ClassManagement\student\searchBar.vue
 -->
<template>
  <div>
    <el-form :model="form">
      <el-input
        v-model.number="numberValidateForm.student_name"
        type="student_name"
        autocomplete="off"
        placeholder="请输入学生姓名"
      />

      <el-form-item>
        <el-select v-model="form.grade_name" placeholder="请选择教室号">
          <el-option
            v-for="(item,index) in getoverclassstatelist"
            :key="index"
            :label="item.room_text"
            :value="item.room_text"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-select v-model="form.room_text" placeholder="班级名">
          <el-option
            v-for="(item,index) in getclassandgradestatelist"
            :key="index"
            :label="item.grade_name"
            :value="item.grade_name"
          />
        </el-select>
      </el-form-item>
      <button @click="seek">搜索</button>
      <button @click="close">重置</button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: [
    'getoverclassstatelist',
    'getclassandgradestatelist',
    'getoverstudentstatelist'
  ],
  data() {
    return {
      form: {
        grade_name: '',
        room_text: ''
      },
      numberValidateForm: {
        student_name: ''
      }
    }
  },
  computed: {},
  methods: {
    seek() {
      const grade_name = this.form.grade_name
      const room_text = this.form.room_text
      const student_name = this.numberValidateForm.student_name
      this.$emit('listInScb', grade_name, room_text, student_name)
    },
    close() {
      this.form.grade_name = ''
      this.form.room_text = ''
      this.numberValidateForm.student_name = ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
}
.el-form {
  width: 100%;
  display: flex;
  /deep/.el-input {
    width: 175px;
    margin-right: 20px;

    .el-input__inner {
      height: 30px;
      margin-top: 5px;
    }
  }
  /deep/.el-form-item {
    width: 175px;
    margin-right: 20px;
    input {
      height: 30px;
    }
  }
  button {
    width: 115px;
    height: 35px;
    margin-right: 20px;
  }
}
</style>
