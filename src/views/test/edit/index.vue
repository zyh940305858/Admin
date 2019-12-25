<template>
  <div class="test-edit">
    <!-- title -->
    <h2 class="test-edit-title">编辑试题</h2>
    <!-- content -->
    <div class="test-edit-content">
      <!-- 编辑表单 -->
      <el-form ref="form" :model="testedit">
        <h3>题目信息</h3>
        <el-form-item>
          <label>题干</label>
          <el-input v-model="testedit.title" placeholder="请输入题目标题，不超过20字" />
        </el-form-item>

        <div class="test-edit-item">
          <label>题目主题</label>
          <Tinymce v-model="testedit.questions_stem" :height="215" />
        </div>

        <el-form-item>
          <label>请选择考试类型：</label>
          <el-select v-model="testedit.exam_id" placeholder="请选择">
            <el-option v-for="(item,index) in testtypelist" :key="index" :label="item.exam_name" :value="item.exam_id" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <label>请选择课程类型：</label>
          <el-select v-model="testedit.subject_id" placeholder="请选择">
            <el-option v-for="(item,index) in coursetypelist" :key="index" :label="item.subject_text" :value="item.subject_id" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <label>请选择题目类型：</label>
          <el-select v-model="testedit.questions_type_id" placeholder="请选择">
            <el-option v-for="(item,index) in questiontypelist" :key="index" :label="item.questions_type_text" :value="item.questions_type_id" />
          </el-select>
        </el-form-item>

        <!-- 编辑答案 -->
        <div class="test-edit-item">
          <label>答案信息</label>
          <Tinymce v-model="testedit.questions_answer" :height="215" />
        </div>

        <!-- 提交表单按钮 -->
        <el-form-item>
          <el-button type="primary" @click="edittestfn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tinymce from '@/components/Tinymce/index' // 引入富文本编辑器组件

export default {
  components: {
    Tinymce // 声明富文本编辑器组件
  },
  data() {
    return {
      testedit: {} // 试题编辑
    }
  },
  computed: {
    ...mapState({
      detaildata: state => state.test.detaildata, // 详情数据
      testtypelist: state => state.test.testtypelist, // 试题类型列表
      coursetypelist: state => state.test.coursetypelist, // 课程类型列表
      questiontypelist: state => state.test.questiontypelist // 题目类型列表
    })
  },
  async created() {
    const obj = {
      questions_id: this.$route.query.id
    }
    await this.getdetailtest(obj) // 获取详情数据
    this.testedit = this.detaildata[0]
    await this.getcoursetype() // 获取课程类型列表
    await this.getquestiontype() // 获取题目类型列表
    await this.gettesttype() // 获取试题类型
  },
  methods: {
    ...mapActions({
      getdetailtest: 'test/getdetailtest', // 获取试卷详情
      getcoursetype: 'test/getcoursetype', // 获取课程类型
      getquestiontype: 'test/getquestiontype', // 获取题目类型
      gettesttype: 'test/gettesttype', // 获取试题类型
      edittest: 'test/edittest' // 获取试题编辑
    }),
    // 提交编辑
    edittestfn() {
      this.edittest(this.testedit)
    }
  }
}
</script>

<style lang="sass" spaced>
@import './style.scss';
</style>
