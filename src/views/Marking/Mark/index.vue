<template>
  <div class="ant-layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px 0px; margin-top: 10px;">待批班级</h2>
    <div class="ant-layout-content">
      <div class="ant-layout-content" style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;">
        <el-table :data="Effected" style="width: 100%;" :header-cell-style="{background:'#F4F7F9'}">
          <el-table-column prop="grade_name" label="班级名" width="180" />
          <el-table-column prop="subject_text" label="课程名" width="180" />
          <el-table-column prop="status" label="课程名" width="180" />
          <el-table-column prop="subject_text" label="课程名" width="180" />
          <el-table-column prop="room_text" label="成材率" />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click.native.prevent="deleteRow(scope.$index, scope.row)"
              >批卷</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="margin-top:20px"
          background
          layout="sizes, prev, pager, next, jumper"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>

    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      Effected: state => state.exam.Effected
    })
  },
  async mounted() {
    await this.getexam()
  },
  methods: {
    ...mapActions({
      getexam: 'exam/getexam'
    }),
    ...mapMutations({
      getGradId: 'exam/getGradId'
    }),
    deleteRow(index, rows) {
      // console.log(rows.grade_id)
      this.getGradId(rows.grade_id)
      this.$router.push('/Marking/approval')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-layout{
      overflow-x: hidden;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex: auto;
      background: #f0f2f5;
      min-height: 0;
}
h2{
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 22px;
}
.ant-layout-content {
    flex: auto;
    min-height: 0;
    box-sizing: border-box;
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
</style>
