<template>
  <div class="test-check-detail">
    <h2 class="test-check-detail-title">试题详情</h2>
    <div class="test-check-detail-main">
      <div class="test-check-detail-list">
        <div style="margin-bottom: 20px;"><span>出题人：{{ testdetail.user_name }}</span></div>
        <h3>题目信息</h3>
        <div style="margin-top: 20px; margin-bottom: 20px;">
          <el-tag>{{ testdetail.questions_type_text }}</el-tag>
          <el-tag type="warning">{{ testdetail.subject_text }}</el-tag>
          <el-tag type="danger">{{ testdetail.exam_name }}</el-tag>
        </div>
        <h4>{{ testdetail.title }}</h4>
        <div>
          <div class="markdown">
            <p>{{ testdetail.questions_stem }}</p>
          </div>
        </div>
      </div>
      <div class="test-check-detail-answer">
        <h3>答案信息</h3>
        <div class="markdown">
          <p>{{ testdetail.questions_answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      testdetail: {}
    }
  },
  computed: {
    ...mapState({
      detaildata: state => state.test.detaildata
    })
  },
  async created() {
    const obj = {
      questions_id: this.$route.query.id
    }
    await this.getdetailtest(obj)
    this.testdetail = this.detaildata[0]
  },
  methods: {
    ...mapActions({
      getdetailtest: 'test/getdetailtest'
    })
  }
}
</script>

<style lang="sass" scoped>
@import './style.scss';
</style>
