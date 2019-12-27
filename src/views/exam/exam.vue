<template>
  <div class="ant-layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">添加考试</h2>
    <div class="ant-layout-content">
      <div
        class="ant-layout-content"
        style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
      >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm ant-form"
        >
          <el-form-item label="试卷名称：" prop="name">
            <el-input v-model="ruleForm.name" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item label="考试类型：">
            <el-select v-model="ruleForm.exam_name" placeholder>
              <el-option
                v-for="(item, index) in typelist"
                :key="index"
                :label="item.exam_name"
                :value="item.exam_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择课程：">
            <el-select v-model="ruleForm.subject_text" placeholder>
              <el-option
                v-for="(item, index) in sublist"
                :key="index"
                :label="item.subject_text"
                :value="item.subject_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试时间" required>
            <el-date-picker
              v-model="ruleForm.value1"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          </el-form-item>
        </el-form>
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
      ruleForm: {
        name: "",
        exam_name: "", // 考试类型
        subject_text: "", // 课程
        value1: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      typelist: state => state.exam.typelist,
      sublist: state => state.exam.sublist
    }),
    async created() {
      if (this.gettypelist.length > 0 && this.getsublist.length > 0) {
        // 无用
      } else {
        await this.gettypelist();
        await this.getsublist();
      }
    }
  },
  methods: {
    ...mapActions({
      gettypelist: "exam/gettypelist",
      getsublist: "exam/getsublist"
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
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.ant-layout,
.ant-layout * {
  box-sizing: border-box;
}
.ant-layout {
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  overflow: hidden;
}
h2 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.ant-layout-content {
  flex: auto;
  min-height: 0;
}
.ant-form {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
/deep/.el-col-11 {
  width: 220px;
}
/deep/.el-col-2 {
  width: auto;
  margin: 0px 10px;
}
</style>
