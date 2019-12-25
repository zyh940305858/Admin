<template>
  <div class="test-edit">
    <h2 class="test-edit-title">编辑试题</h2>
    <div class="test-edit-content">
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

        <div class="test-edit-item">
          <label>答案信息</label>
          <Tinymce v-model="testedit.questions_answer" :height="215" />
        </div>

        <el-form-item>
          <el-button type="primary" @click="edittestfn">提交</el-button>
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
      testedit: {}
    }
  },
  computed: {
    ...mapState({
      detaildata: state => state.test.detaildata,
      testtypelist: state => state.test.testtypelist,
      coursetypelist: state => state.test.coursetypelist,
      questiontypelist: state => state.test.questiontypelist
    })
  },
  async created() {
    const obj = {
      questions_id: this.$route.query.id
    }
    await this.getdetailtest(obj)
    this.testedit = this.detaildata[0]
    await this.getcoursetype()
    await this.getquestiontype()
    await this.gettesttype()
  },
  methods: {
    ...mapActions({
      getdetailtest: 'test/getdetailtest',
      getcoursetype: 'test/getcoursetype',
      getquestiontype: 'test/getquestiontype',
      gettesttype: 'test/gettesttype',
      edittest: 'test/edittest'
    }),
    edittestfn() {
      this.edittest(this.testedit)
    }
  }
}
</script>

<style lang="sass" spaced>
@import './style.scss';
</style>
