<template>
  <div class="ant-layout-content">
    <div class="ant-layout-content">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
        <h4>试卷列表</h4>
        <el-table :data="studentlist" style="width: 100%">
          <el-table-column prop="grade_name" label="班级" width="180"></el-table-column>
          <el-table-column prop="student_name" label="姓名" width="180"></el-table-column>
          <el-table-column prop label="阅卷状态" width="180">未阅</el-table-column>
          <el-table-column prop="start_time" label="开始时间" width="180"></el-table-column>
          <el-table-column prop="end_time" label="结束时间" width="180"></el-table-column>
          <el-table-column prop="-" label="成材率">--------</el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, examlist)"
                type="text"
                size="small"
              >批卷</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  computed: {
    ...mapState({
      examlist: state => state.exam.examlist,
      studentlist: state => state.exam.studentlist
    })
  },
  methods: {
    ...mapActions({
      exam: "exam/exam",
      student: "exam/student"
    }),
    onSubmit() {
      console.log("submit!");
    },
    deleteRow(){
      console.log(111)
    }
  },
  created() {},
  mounted() {
    let { grade_id } = this.$route.query;
    // console.log(this.$route.query)
    console.log(grade_id ,'grade_idgrade_idgrade_idgrade_idgrade_idgrade_idgrade_idgrade_idgrade_idgrade_idgrade_idgrade_id')
    this.student(grade_id);
  }
};
</script>
<style scoped lang="scss">
</style>