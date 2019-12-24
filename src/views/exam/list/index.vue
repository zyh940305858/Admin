<template>
  <div class="ant-layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">试卷列表</h2>
    <div class="ant-layout-content">
      <div
        class="ant-layout-content"
        style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
      >
        <el-form :inline="true" :model="from" class="demo-form-inline">
          <el-form-item label="考试类型">
            <el-select v-model="from.exam_name" placeholder>
              <el-option
                v-for="(item, index) in typelist"
                :key="index"
                :label="item.exam_name"
                :value="item.exam_id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程">
            <el-select v-model="from.subject_text" placeholder>
              <el-option
                v-for="(item, index) in sublist"
                :key="index"
                :label="item.subject_text"
                :value="item.subject_id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div
        class="ant-layout-content"
        style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
      >
        <div class="style_container__2hI6B" style="padding: 0px;">
          <div class="style_buttons__z2xtt">
            <div class="style_tool__31xLZ">
              <h4 style="margin: 0px;">试卷列表</h4>
                <el-tabs type="border-card">
                  <el-tab-pane label="全部" />
                  <el-tab-pane label="进行中" />
                  <el-tab-pane label="已结束" />
                </el-tabs>
            </div>
          </div>
          <div class="ant-table-wrapper style_table__12_WF">
            <el-table
              :data="examlist"
              style="width: 100%"
              :header-cell-style="{background:'#F4F7F9'}"
            >
              <el-table-column prop="title" label="试卷信息" width="260"></el-table-column>
              <el-table-column prop="grade_name" label="班级" width="180"></el-table-column>
              <el-table-column prop="user_name" label="创始人"></el-table-column>
              <el-table-column prop="start_time" label="开始时间"></el-table-column>
              <el-table-column prop="end_time" label="结束时间"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, examlist)"
                    type="text"
                    size="small"
                  >详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
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
      from: {
        exam_name: "", //考试类型
        subject_text: "" //课程
      }
    };
  },
  computed: {
    ...mapState({
      examlist: state => state.exam.examlist,
      typelist: state => state.exam.typelist,
      sublist: state => state.exam.sublist
    })
  },
  methods: {
    ...mapActions({
      getExamlist: "exam/getExamlist",
      gettypelist: "exam/gettypelist",
      getsublist: "exam/getsublist",
      actionsearch: "exam/actionsearch"
    }),
    onSubmit() {
      this.actionsearch(this.from)
    },
    deleteRow(ind, index) {
      console.log(ind);
    }
  },
  async created() {
    if (this.gettypelist.length > 0 && this.getsublist.length > 0) {
    } else {
      await this.gettypelist();
      await this.getsublist();
    }
  },
  mounted() {
    this.getExamlist();
  }
};
</script>
<style scoped lang="scss">
//深度选择器/deep/
/deep/.el-tabs__content {
  padding: 0;
}

.ant-layout {
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
  box-sizing: border-box;
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
.style_tool__31xLZ {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.ant-radio-group {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  line-height: unset;
}
.ant-radio-button-wrapper-checked:first-child {
  border-color: #0139fd;
  box-shadow: none !important;
}
.ant-radio-button-wrapper:first-child {
  border-radius: 2px 0 0 2px;
  border-left: 1px solid #d9d9d9;
}
.ant-radio-button-wrapper-checked {
  background: #fff;
  color: #0139fd;
  z-index: 1;
}
.ant-radio-button-wrapper {
  margin: 0;
  height: 32px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.65);
  display: inline-block;
  transition: color 0.3s, background 0.3s, border-color 0.3s;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-left: 0;
  border-top-width: 1.02px;
  background: #fff;
  padding: 0 15px;
  position: relative;
}
label {
  touch-action: manipulation;
}
.style_container__2hI6B .style_buttons__z2xtt span {
  color: #1890ff;
}
.ant-radio-button-wrapper > .ant-radio-button {
  margin-left: 0;
  display: block;
  width: 0;
  height: 0;
}
.ant-radio-button-wrapper input[type="radio"] {
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.ant-table-wrapper {
  zoom: 1;
}
.style_table__12_WF {
  border-radius: 4px;
}
</style>