<template>
  <div class="grade-grade">
    <h2 class="grade-grade-title">班级管理</h2>
    <div class="grade-grade-content">
      <div class="grade-grade-item">
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addgradeflag = true">添加班级</el-button>
      </div>
      <div class="grade-grade-table">
        <el-table :data="tableData" style="width: 100%" :header-cell-style="{ 'backgroundColor': '#fafafa', 'color': 'rgba(0, 0, 0, 0.85)' }">
          <el-table-column prop="grade_name" label="班级名" />
          <el-table-column prop="subject_text" label="课程名" />
          <el-table-column prop="room_text" label="教室号" />
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <a type="text" size="small" @click="showgradefn(scope.row)">修改</a>
              |
              <a type="text" size="small" @click="delgradefn(scope.row)">删除</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 添加班级 -->
    <el-dialog
      title="添加班级"
      center
      :visible.sync="addgradeflag"
      width="30%"
    >
      <el-form :model="addgradeform">
        <el-form-item label="班级名">
          <el-input v-model="addgradeform.grade_name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="教室号">
          <el-select v-model="addgradeform.room_id" placeholder="请选择教室号">
            <el-option v-for="(item,index) in tableData" :key="index" :label="item.room_text" :value="item.room_id" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名">
          <el-select v-model="addgradeform.subject_id" placeholder="请选择课程名">
            <el-option v-for="(item,index) in courselist" :key="index" :label="item.subject_text" :value="item.subject_id" />
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addgradeflag = false">取 消</el-button>
        <el-button class="btn" type="primary" @click="addgradefn">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改班级 -->
    <el-dialog
      title="修改班级"
      :visible.sync="editgradeflag"
      width="30%"
      center
    >
      <el-form :model="editgradeform">
        <el-form-item label="班级名">
          <el-input v-model="editgradeform.grade_name" autocomplete="off" disabled />
        </el-form-item>
        <el-form-item label="教室号">
          <el-select v-model="editgradeform.room_id" placeholder="请选择教室号">
            <el-option v-for="(item,index) in tableData" :key="index" :label="item.room_text" :value="item.room_id" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名">
          <el-select v-model="editgradeform.subject_id" placeholder="请选择课程名">
            <el-option v-for="(item,index) in courselist" :key="index" :label="item.subject_text" :value="item.subject_id" />
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editgradeflag = false">取 消</el-button>
        <el-button class="btn" type="primary" @click="editgradefn">确 定</el-button>
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
      addgradeflag: false,
      editgradeflag: false,
      addgradeform: {
        grade_name: '',
        room_id: '',
        subject_id: ''
      },
      editgradeform: {
        grade_id: '',
        grade_name: '',
        room_id: '',
        subject_id: ''
      },
      courselist: []
    }
  },
  computed: {
    ...mapState({
      gradelist: state => state.grade.gradelist,
      coursetypelist: state => state.test.coursetypelist
    })
  },
  async created() {
    await this.getgradelist()
    await this.getcoursetype()
    this.tableData = this.gradelist
    this.courselist = this.coursetypelist
  },
  async updated() {
    await this.getgradelist()
    this.tableData = this.gradelist
  },
  methods: {
    ...mapActions({
      getgradelist: 'grade/getgradelist',
      getcoursetype: 'test/getcoursetype',
      addgrade: 'grade/addgrade',
      editgrade: 'grade/editgrade',
      delgrade: 'grade/delgrade'
    }),
    showgradefn(row) {
      this.editgradeform = row
      this.editgradeflag = true
    },
    async addgradefn() {
      await this.addgrade(this.addgradeform)
      this.addgradeflag = false
    },
    async editgradefn() {
      await this.editgrade(this.editgradeform)
      this.editgradeflag = false
    },
    async delgradefn(row) {
      await this.delgrade(row.grade_id)
    }
  }
}
</script>

<style lang="sass" scoped>
@import './style.scss';
</style>
