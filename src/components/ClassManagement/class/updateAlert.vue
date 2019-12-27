<template>
  <div>
    <!-- Form -->
    <el-dialog title="添加班级" :visible.sync="dialogformvisible">
      <el-form ref="form" :model="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="班级名">
          <el-input v-model="form.grade_name" type="input" :disabled="true" />
        </el-form-item>

        <el-form-item label="*教室号:" :label-width="formLabelWidth">
          <el-select v-model="form.room_id" placeholder="请选择教室号">
            <el-option
              v-for="(item,index) in getOverClassStateList"
              :key="index"
              :label="item.room_text"
              :value="item.room_id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="*课程名:" :label-width="formLabelWidth">
          <el-select v-model="form.subject_id" placeholder="课程名">
            <el-option
              v-for="(item,index) in getAllLessonsStateList"
              :key="index"
              :label="item.subject_text"
              :value="item.subject_id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="close">取 消</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['dialogformvisible', 'obj'],
  data() {
    return {
      form: {
        grade_name: '',
        room_id: '',
        subject_id: ''
      },
      formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapState({
      getOverClassStateList: store =>
        store.classManagement.getOverClassStateList,
      getAllLessonsStateList: store =>
        store.classManagement.getAllLessonsStateList
    })
  },
  created() {
    this.getOverClassroomActionsList()
    this.getAllLessonsActionsList()
  },
  methods: {
    ...mapActions({
      getOverClassroomActionsList: 'classManagement/getOverClassroomActionsList',
      getAllLessonsActionsList: 'classManagement/getAllLessonsActionsList',
      updateStudentActions: 'classManagement/updateStudentActions'
    }),
    close() {
      this.dialogformvisible = false
      // console.log(this.dialogformvisible,'-------------close---------")
      this.$emit('flag', this.dialogformvisible)
    },
    submit() {
      this.dialogformvisible = false
      // console.log(
      //   this.dialgFormVisible,
      //  '----------submit------dialogformvisible========------"
      // )
      this.$emit('flag', this.dialogformvisible)
      // 更新数据
      const from = JSON.parse(JSON.stringify(this.form))
      const list = {
        grade_id: this.obj.grade_id,
        grade_name: this.obj.grade_name,
        subject_id: from.subject_id,
        room_id: from.room_id
      }
      this.updateStudentActions(list)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          // console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
