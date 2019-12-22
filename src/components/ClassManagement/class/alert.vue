<template>
  <div>
    <button @click="dialogFormVisible = true">+添加教室</button>
    <!-- Form -->
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="班级名"
            prop="age"
            :rules="[
      { required: true, message: '班级名不能为空'},
      { type: 'number', message: '班级名必须为数字值'}
    ]"
          >
            <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>-->
        </el-form>

        <el-form-item label="*教室号:" :label-width="formLabelWidth">
          <el-select v-model="form.classroom" placeholder="请选择教室号">
            <el-option
              v-for="(item,index) in getOverClassStateList"
              :key="index"
              :label="item.room_text"
              :value="item.room_text"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="*课程名:" :label-width="formLabelWidth">
          <el-select v-model="form.room_text" placeholder="课程名">
            <el-option
              v-for="(item,index) in getAllLessonsStateList"
              :key="index"
              :label="item.subject_text"
              :value="item.subject_text"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        class: "",
        classroom: "",
        room_text: "",
        type: []
      },
      formLabelWidth: "120px",
      numberValidateForm: {
        age: ""
      }
    };
  },
  computed: {
    ...mapState({
      getOverClassStateList: store =>
        store.classManagement.getOverClassStateList,
      getAllLessonsStateList: store =>
        store.classManagement.getAllLessonsStateList
    })
  },
  methods: {
    ...mapActions({
      getOverClassroomActionsList:
        "classManagement/getOverClassroomActionsList",
      getAllLessonsActionsList: "classManagement/getAllLessonsActionsList"
    }),

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    this.getOverClassroomActionsList();
    this.getAllLessonsActionsList();
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 160px;
  height: 40px;
  font-size: 15px;
}
</style>