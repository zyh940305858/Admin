<template>
  <div class="test-category">
    <h2 class="test-category-title">试题分类</h2>
    <div class="test-category-content">
      <div class="test-category-item">
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="centerDialogVisible = true">添加类型</el-button>
      </div>
      <div class="test-category-table">
        <el-table :data="tableData" style="width: 100%" :header-cell-style="{ 'backgroundColor': '#fafafa', 'color': 'rgba(0, 0, 0, 0.85)' }">
          <el-table-column prop="questions_type_id" label="类型id" />
          <el-table-column prop="questions_type_text" label="类型名称" />
          <el-table-column prop="address" label="操作" />
        </el-table>
      </div>
    </div>
    <el-dialog
      center
      title="创建新类型"
      width="30%"
      :visible.sync="centerDialogVisible"
    >
      <el-input v-model="questiontypename" placeholder="请输入类型名称" />
      <span slot="footer" class="dialog-footer">
        <el-button class="btn" type="primary" @click="addquestiontypefn">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
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
      centerDialogVisible: false,
      questiontypename: ''
    }
  },
  computed: {
    ...mapState({
      questiontypelist: state => state.test.questiontypelist
    })
  },
  async created() {
    if (this.questiontypelist.length) {
      this.tableData = this.questiontypelist
    } else {
      await this.getquestiontype()
      this.tableData = this.questiontypelist
    }
  },
  methods: {
    ...mapActions({
      getquestiontype: 'test/getquestiontype',
      addquestiontype: 'test/addquestiontype'
    }),
    addquestiontypefn() {
      this.addquestiontype({ text: this.questiontypename })
      this.centerDialogVisible = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import './style.scss';
</style>
