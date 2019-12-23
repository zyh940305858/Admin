<template>
  <div class="test-check-detail">
    <h2 class="test-check-detail-title">试题详情</h2>
    <div class="test-check-detail-main">
      <div class="test-check-detail-content">
        <div><span>{{ detaildata[0].title }}</span></div>
      </div>
      <div class="test-check-detail-content">
        123
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {

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
