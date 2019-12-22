<template>
  <div class="grade-classroom">
    <h2 class="grade-classroom-title">教室管理</h2>
    <div class="grade-classroom-content">
      <div class="grade-classroom-item">
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addclassroomflag = true">添加教室</el-button>
      </div>
      <div class="grade-classroom-table">
        <el-table :data="tableData" style="width: 100%" :header-cell-style="{ 'backgroundColor': '#fafafa', 'color': 'rgba(0, 0, 0, 0.85)' }">
          <el-table-column prop="room_text" label="教室号" />
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <a type="text" size="small" @click="delclassroomfn(scope.row)">删除</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-dialog
      title="添加教室"
      center
      :visible.sync="addclassroomflag"
      width="30%"
    >
      <el-form :model="addclassroomform">
        <el-form-item label="教室号">
          <el-input v-model="addclassroomform.room_text" placeholder="请输入教室号" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addclassroomflag = false">取 消</el-button>
        <el-button class="btn" type="primary" @click="addclassroomfn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      tableData: [],
      addclassroomflag: false,
      addclassroomform: {
        room_text: ''
      }
    }
  },
  computed: {
    ...mapState({
      classroomlist: state => state.grade.classroomlist
    })
  },
  async created() {
    await this.getclassroom()
    this.tableData = this.classroomlist
  },
  async updated() {
    await this.getclassroom()
    this.tableData = this.classroomlist
  },
  methods: {
    ...mapActions({
      getclassroom: 'grade/getclassroom',
      delclassroom: 'grade/delclassroom',
      addclassroom: 'grade/addclassroom'
    }),
    async delclassroomfn(row) {
      await this.delclassroom(row.room_id)
    },
    async addclassroomfn() {
      await this.addclassroom(this.addclassroomform)
      this.addclassroomflag = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
