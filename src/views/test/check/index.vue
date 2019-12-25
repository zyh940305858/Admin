<template>
  <div class="test-check">
    <!-- title -->
    <h2 class="test-check-title">查看试题</h2>
    <!-- conten -->
    <div class="test-check-content">

      <!-- 条件选择 -->
      <div class="test-check-item">
        <!-- 条件表单 -->
        <el-form ref="form" label-width="80px">
          <el-form-item label="课程类型:">
            <el-button v-for="(item,index) in newarr" :key="index" :class="index == currentindex || currentindex == 0 ? 'btns':''" @click="radiofn(index)">{{ item.subject_text }}</el-button>
          </el-form-item>
          <el-form-item label="考试类型:">
            <el-select v-model="form.exam_id" placeholder="请选择">
              <el-option v-for="(item,index) in testtypelist" :key="index" :label="item.exam_name" :value="item.exam_id" />
            </el-select>
            <label>试题类型:</label>
            <el-select v-model="form.questions_type_id" placeholder="请选择">
              <el-option v-for="(item,index) in questiontypelist" :key="index" :label="item.questions_type_text" :value="item.questions_type_id" />
            </el-select>
            <el-button class="btn" icon="el-icon-search" @click="getdetailtestfn">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 试题列表 -->
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
              <a type="primary" @click="totestedit(item)">编辑</a>
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
      // 条件表单
      form: {
        subject_id: undefined, // 课程id
        exam_id: undefined, // 考试类型id
        questions_type_id: undefined // 试题类型id
      },
      listData: [], // 列表数据
      newarr: [], // 单选全选数组
      currentindex: undefined // 选中下标
    }
  },
  computed: {
    ...mapState({
      testlist: state => state.test.testlist, // 试题列表
      testtypelist: state => state.test.testtypelist, // 试题类型列表
      coursetypelist: state => state.test.coursetypelist, // 课程类型列表
      questiontypelist: state => state.test.questiontypelist, // 题目类型列表
      detaildata: state => state.test.detaildata // 详情数据
    })
  },
  async created() {
    /**
     * 开始拿到所有数据
    */
    await this.getcoursetype()
    await this.gettesttype()
    await this.getquestiontype()
    await this.getalltest()
    this.newarrfn(this.coursetypelist)
    this.listData = this.testlist
  },
  methods: {
    ...mapActions({
      getalltest: 'test/getalltest', // 获取所有试题
      gettesttype: 'test/gettesttype', // 获取试题类型
      getcoursetype: 'test/getcoursetype', // 获取课程类型
      getquestiontype: 'test/getquestiontype', // 获取题目类型
      getdetailtest: 'test/getdetailtest' // 获取试题详情
    }),
    // 跳转到详情页面
    totestdetail(item) {
      this.$router.push(`/test/detail?id=${item.questions_id}`)
    },
    // 跳转到编辑页面
    totestedit(item) {
      this.$router.push(`/test/edit?id=${item.questions_id}`)
    },
    // 获取到符合条件的试题列表
    async getdetailtestfn() {
      await this.getdetailtest(this.form)
      this.listData = this.detaildata
    },
    // 整理全选数据
    newarrfn(list) {
      this.newarr = [{ subject_id: undefined, subject_text: 'all' }].concat(...list)
    },
    // 选择框按钮
    radiofn(index) {
      if (this.currentindex === index) {
        this.currentindex = undefined
        this.form.subject_id = undefined
      } else {
        this.currentindex = index
        this.form.subject_id = this.newarr[index].subject_id
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import './style.scss';
</style>
