<template>
  <div class="test-check">
    <h2 class="test-check-title">查看试题</h2>
    <div class="test-check-content">
      <div class="test-check-item">
        <el-form ref="form" label-width="80px">
          <el-form-item label="课程类型:">
            <el-radio-group v-model="form.coursetype">
              <el-radio-button v-model="form.coursetype" label="all" />
              <el-radio-button v-for="(item,index) in coursetypelist" :key="index" :label="item.subject_text" :value="item.subject_id" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="考试类型:">
            <el-select v-model="form.testtype" placeholder="请选择">
              <el-option v-for="(item,index) in testtypelist" :key="index" :label="item.exam_name" :value="item.exam_id" />
            </el-select>
            <label>试题类型:</label>
            <el-select v-model="form.questiontype" placeholder="请选择">
              <el-option v-for="(item,index) in questiontypelist" :key="index" :label="item.questions_type_text" :value="item.questions_type_id" />
            </el-select>
            <el-button class="btn" icon="el-icon-search">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="test-check-list">
      <ul>
        <li v-for="(item,index) in listData" :key="index">
          <div class="content" @click="totestdetail(item)">
            <h4 class="list-item-title">{{ item.title }}</h4>
            <p>
              <el-tag>{{ item.questions_type_text }}</el-tag>
              <el-tag type="warning">{{ item.subject_text }}</el-tag>
              <el-tag type="danger">{{ item.exam_name }}</el-tag>
            </p>
            <span>{{ item.user_name }} 发布</span>
          </div>
          <div class="link">
            <div>
              <a type="primary">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        coursetype: '',
        testtype: '',
        questiontype: ''
      },
      listData: [],
      checkall: false,
      isIndeterminate: false,
      ckeckallarr: []
    }
  },
  computed: {
    ...mapState({
      testlist: state => state.test.testlist,
      testtypelist: state => state.test.testtypelist,
      coursetypelist: state => state.test.coursetypelist,
      questiontypelist: state => state.test.questiontypelist
    })
  },
  async created() {
    await this.getcoursetype()
    await this.gettesttype()
    await this.getquestiontype()
    await this.getalltest()
    this.listData = this.testlist
  },
  methods: {
    ...mapActions({
      getalltest: 'test/getalltest',
      gettesttype: 'test/gettesttype',
      getcoursetype: 'test/getcoursetype',
      getquestiontype: 'test/getquestiontype'
    }),
    totestdetail(item) {
      this.$router.push(`/test/detail?id=${item.questions_id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
@import './style.scss';
</style>
