<template>
  <div class="exam-add">
    <h2 class="exam-add-title">添加考试</h2>
    <div class="exam-add-content">
      <div class="exam-add-item">
        <el-form ref="addform" :model="addform" label-width="100px" class="demo-addform">
          <el-form-item label="试卷名称">
            <el-input v-model="addform.name" />
          </el-form-item>
          <el-form-item label="考试类型">
            <el-select v-model="addform.testtype" placeholder="考试类型">
              <el-option v-for="(item,index) in testlist" :key="index" :label="item.exam_name" :value="item.exam_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择课程">
            <el-select v-model="addform.coursetype" placeholder="选择课程">
              <el-option v-for="(item,index) in courselist" :key="index" :label="item.subject_text" :value="item.subject_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="设置题量">
            <el-input v-model="addform.testnum" type="number" />
          </el-form-item>
          <el-form-item label="考试时间">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker v-model="addform.date1" style="width: 100%;" type="datetime" placeholder="开始日期" />
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker v-model="addform.date2" style="width: 100%;" type="datetime" placeholder="结束时间" />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('addform')">立即创建</el-button>
            <el-button @click="resetForm('addform')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      addform: {
        name: '',
        testtype: '',
        coursetype: '',
        testnum: '',
        date1: '',
        date2: ''
      },
      testlist: [],
      courselist: []
    }
  },
  computed: {
    ...mapState({
      testtypelist: state => state.test.testtypelist,
      coursetypelist: state => state.test.coursetypelist
    })
  },
  async created() {
    if (this.testtypelist.length > 0 && this.coursetypelist.length > 0) {
      this.testlist = this.testtypelist
      this.courselist = this.coursetypelist
    } else {
      await this.gettesttype()
      await this.getcoursetype()
      this.testlist = this.testtypelist
      this.courselist = this.coursetypelist
    }
  },
  methods: {
    ...mapActions({
      gettesttype: 'test/gettesttype',
      getcoursetype: 'test/getcoursetype'
    })
  }
}
</script>

<style lang="sass">
@import './style.scss';
</style>
