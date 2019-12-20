<template>
  <div class="ant-layout">
    <h3>待批班级</h3>
    <div>
        <el-table :data="examlist" style="width: 100%">
          <el-table-column prop="grade_name" label="班级名" width="180"></el-table-column>
          <el-table-column prop="subject_text" label="课程名" width="180"></el-table-column>
          <el-table-column prop label="阅卷状态" width="180"></el-table-column>
          <el-table-column prop="subject_text" label="课程名" width="180"></el-table-column>
          <el-table-column prop="room_text" label="成材率"></el-table-column>
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
    return {};
  },
  computed: {
    ...mapState({
      examlist: state => state.exam.examlist
    })
  },
  methods: {
    ...mapActions({
      exam: "exam/exam"
    }),
    deleteRow(index, rows) {
      this.$router.push({path:'/Marking/exam',query:{grade_id:rows[index].grade_id}})
      // console.log(rows[index])
      // console.log(111)
    }
  },
  created() {},
  mounted() {
    // console.log(this.examlist)
    this.exam();
  }
};
</script>
<style lang="scss" scoped>
.ant-layout{
      display: flex;
      flex-direction: column;
      flex: auto;
      background: #f0f2f5;
      min-height: 0;
      overflow-x: hidden;
      box-sizing: border-box;
}
h2{
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
}
</style>