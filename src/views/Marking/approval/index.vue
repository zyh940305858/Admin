<template>
  <div class="ant-layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;" />
    <div class="ant-layout-content">
      <div class="ant-layout-content" style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="">
              <el-option />
            </el-select>
          </el-form-item>
          <el-form-item label="班级">
            <el-select v-model="formInline.region" placeholder="">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="ant-layout-content" style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;">
      <div class="style_container__2hI6B" style="padding: 0px;">
        <div class="style_buttons__z2xtt">
          <div class="style_tool__1IZke">
            <h4>试卷列表</h4>
          </div>
        </div>
      </div>
      <el-table :data="studentlist" style="width: 100%">
        <el-table-column prop="grade_name" label="班级" width="180" />
        <el-table-column prop="student_name" label="姓名" width="180" />
        <el-table-column prop="status" label="阅卷状态" width="180" />
        <el-table-column prop="start_time" label="开始时间" width="180" />
        <el-table-column prop="end_time" label="结束时间" width="180" />
        <el-table-column prop="-" label="成材率">--------</el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, Effected)"
            >批卷</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      formInline: {
        status: '',
        region: ''
      }
    }
  },
  computed: {
    ...mapState({
      Effected: state => state.exam.Effected,
      studentlist: state => state.exam.studentlist,
      getGradId: state => state.exam.getGradId
    })
  },
  async mounted() {
    await this.getexam()
    await this.getstudent(this.getGradId)
  },
  methods: {
    ...mapActions({
      getexam: 'exam/getexam',
      getstudent: 'exam/getstudent'
    }),
    onSubmit() {
      console.log('submit!')
    },
    deleteRow() {
      console.log(111)
    }
  }
}
</script>
<style scoped lang="scss">
.ant-layout{
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
.ant-layout-content {
    flex: auto;
    min-height: 0;
}
.style_container__2hI6B {
    background: #fff;
    border-radius: 4px;
}
.style_container__2hI6B .style_buttons__z2xtt {
    position: relative;
    margin-bottom: 25px;
    display: flex;
}
.style_tool__1IZke {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}
</style>
