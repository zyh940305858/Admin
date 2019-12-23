<template>
  <div class="test-add">
    <h2 class="test-add-title">添加试题</h2>
    <div class="test-add-content">
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
            <el-option v-for="(item,index) in questiontypelist" :key="index" :label="item.questions_type_text" :value="item.questions_type_id">
              {{ item.questions_type_text }}
            </el-option>
          </el-select>
        </el-form-item>

        <div class="test-add-item">
          <label>答案信息</label>
          <Tinymce v-model="form.answer" :height="215" />
        </div>

        <el-form-item>
          <el-button type="primary" @click="addtest">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tinymce from '@/components/Tinymce/index'

export default {
  components: {
    Tinymce
  },
  data() {
    return {
      form: {
        stem: '',
        theme: '',
        testtype: '',
        coursetype: '',
        questiontype: '',
        answer: ''
      }
    }
  },
  computed: {
    ...mapState({
      testtypelist: state => state.test.testtypelist,
      coursetypelist: state => state.test.coursetypelist,
      questiontypelist: state => state.test.questiontypelist,
      userid: state => state.user.userid
    })
  },
  created() {
    this.gettesttype()
    this.getcoursetype()
    this.getquestiontype()
  },
  methods: {
    ...mapActions({
      gettesttype: 'test/gettesttype',
      getcoursetype: 'test/getcoursetype',
      getquestiontype: 'test/getquestiontype',
      getInfo: 'user/getInfo',
      addtestquestion: 'test/addtestquestion'
    }),
    async addtest() {
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
