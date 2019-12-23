<template>
  <div>
    <!-- <button @click="dialogFormVisible = true">+添加班级</button> -->
    <!-- Form -->
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
       
          <el-form-item
            label="班级名"
          >
            <el-input type="input" v-model="form.grade_name" ></el-input>
          </el-form-item>
        

        <el-form-item label="*教室号:" :label-width="formLabelWidth">
          <el-select v-model="form.room_id" placeholder="请选择教室号">
            <el-option
              v-for="(item,index) in getOverClassStateList"
              :key="index"
              :label="item.room_text"
              :value="item.room_id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="*课程名:" :label-width="formLabelWidth">
          <el-select v-model="form.subject_id" placeholder="课程名">
            <el-option
              v-for="(item,index) in getAllLessonsStateList"
              :key="index"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
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
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import Axios from 'axios';
export default {
  props:["dialogFormVisible"],
  data() {
    return {
      // dialogFormVisible: false,
      form: {
        grade_name: "",
        room_id: "",
        subject_id: "",
      },
      formLabelWidth: "120px",
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
      getAllLessonsActionsList: "classManagement/getAllLessonsActionsList",
      addClassActions: "classManagement/addClassActions"
    }),
    close(){
      this.dialogFormVisible = false;
    },
    submit(){
      this.dialogFormVisible = false;
      let list=JSON.parse(JSON.stringify(this.form));
      this.addClassActions(list)
    },
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
  },
  updated(){

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