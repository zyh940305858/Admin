<template>
  <div>
    <button @click="dialogFormVisible = true">+添加班级</button>
    <!-- Form -->
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px" class="demo-ruleForm">
        <el-form-item label="*班级名">
          <el-input v-model="form.grade_name" type="input" />
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
        <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      dialogFormVisible: false,
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
      getOverClassroomActionsList:
        'classManagement/getOverClassroomActionsList',
      getAllLessonsActionsList: 'classManagement/getAllLessonsActionsList',
      addClassActions: 'classManagement/addClassActions'
    }),
    submit() {
      this.dialogFormVisible = false
      const list = JSON.parse(JSON.stringify(this.form))
      this.addClassActions(list)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
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
/deep/.el-dialog{
  width: 550px;
}
/deep/.el-dialog__header{
  width: 350px;
}
/deep/.el-dialog__body{
  width: 350px;
}

/deep/.el-input__inner{
  width: 300px;
}
</style>
