<template>
  <div class="test-add">
    <!-- tiele -->
    <h2 class="test-add-title">添加试题</h2>
    <!-- content -->
    <div class="test-add-content">
      <!-- 题目表单 -->
      <el-form ref="form" :model="form">
        <h3>题目信息</h3>
        <el-form-item>
          <label>题干</label>
          <el-input v-model="form.stem" placeholder="请输入题目标题，不超过20字" />
        </el-form-item>

        <div class="test-add-item">
          <label>题目主题</label>
          <Tinymce v-model="form.theme" :height="215" />
        </div>

        <el-form-item>
          <label>请选择考试类型：</label>
          <el-select v-model="form.testtype" placeholder="请选择">
            <el-option v-for="(item,index) in testtypelist" :key="index" :label="item.exam_name" :value="item.exam_id" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <label>请选择课程类型：</label>
          <el-select v-model="form.coursetype" placeholder="请选择">
            <el-option v-for="(item,index) in coursetypelist" :key="index" :label="item.subject_text" :value="item.subject_id" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <label>请选择题目类型：</label>
          <el-select v-model="form.questiontype" placeholder="请选择">
            <el-option v-for="(item,index) in questiontypelist" :key="index" :label="item.questions_type_text" :value="item.questions_type_id" />
          </el-select>
        </el-form-item>

        <div class="test-add-item">
          <label>答案信息</label>
          <Tinymce v-model="form.answer" :height="215" />
        </div>

        <!-- 提交题目 -->
        <el-form-item>
          <el-button type="primary" @click="addtestfn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tinymce from '@/components/Tinymce/index' // 引入富文本编辑器

export default {
  components: {
    Tinymce // 声明富文本编辑器
  },
  data() {
    return {
      // 题目表单
      form: {
        stem: '', // 题干
        theme: '', // 主题
        testtype: '', // 考试类型
        coursetype: '', // 课程类型
        questiontype: '', // 试题类型
        answer: '' // 题目答案
      }
    }
  },
  computed: {
    ...mapState({
      testtypelist: state => state.test.testtypelist, // 考试类型列表
      coursetypelist: state => state.test.coursetypelist, // 课程类型列表
      questiontypelist: state => state.test.questiontypelist, // 题目类型列表
      userid: state => state.user.userid // 用户iD
    })
  },
  created() {
    /**
     * 获取到所有数据
    */
    this.gettesttype()
    this.getcoursetype()
    this.getquestiontype()
  },
  methods: {
    ...mapActions({
      gettesttype: 'test/gettesttype', // 获取考试类型
      getcoursetype: 'test/getcoursetype', // 获取课程类型
      getquestiontype: 'test/getquestiontype', // 获取试题类型
      getInfo: 'user/getInfo', // 获取个人信息
      addtestquestion: 'test/addtestquestion' // 添加试题接口
    }),
    // 添加试题
    async addtestfn() {
      this.getInfo()
      const obj = { ...this.form, userid: this.userid }
      await this.addtestquestion(obj)
    }
  }
}
</script>

<style lang="sass" scoped>
@import './style.scss';
</style>
