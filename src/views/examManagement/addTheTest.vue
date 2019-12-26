<template>
  <div class="box">
    <p>添加用户</p>
    <div class="con">
      <div class="one">
        <button
          class="addAuthor"
          style="color:#0139FD;border:1px solid #0139FD;height:32px;width:88px; line-height: 11px;font-size:14px"
          @click="addAuthor"
        >添加用户</button>
        <button class="newAuthor" @click="gNew">更新用户</button>
        <el-form ref="ruleForm" :model="ruleForm" status-icon class="demo-ruleForm">
          <el-tabs ref="select" :tab-position="tabPosition" style="display:none">
            <el-select v-model="value" placeholder="请选择身份id">
              <el-option
                v-for="item in userNPID"
                :key="item.identity_text"
                :value="item.identity_text"
              />
            </el-select>
          </el-tabs>
          <el-form-item prop="pass">
            <el-input v-model="ruleForm.pass" type="text" autocomplete="off" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-tabs :tab-position="tabPosition">
            <el-select v-model="ruleForm.values" placeholder="请选择">
              <el-option
                v-for="item in userNPID"
                :key="item.identity_text"
                :value="item.identity_text"
              />
            </el-select>
          </el-tabs>
          <el-form-item>
            <el-button class="true" type="primary" @click="submitForm()">确定</el-button>
            <el-button class="reset" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="two">
        <button
          class="addAuthor"
          style="color:#0139FD;border:1px solid #0139FD;height:32px;width:88px; line-height: 11px;font-size:14px"
        >添加身份</button>
        <el-form
          ref="numberValidateForm"
          :model="numberValidateForm"
          class="demo-ruleForm demo-two"
        >
          <el-form-item prop="author">
            <el-input
              v-model.number="numberValidateForm.author"
              type="author"
              autocomplete="off"
              placeholder="请输入身份名称"
            />
          </el-form-item>
          <el-form-item>
            <el-button class="true" type="primary" @click="submitFormTWO()">确定</el-button>
            <el-button class="reset" @click="resetFormTWO('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="three">
        <button
          class="addAuthor"
          style="color:#0139FD;border:1px solid #0139FD;font-size:14px"
        >添加api接口权限</button>
        <AddApiQuanXi />
      </div>
      <div class="four">
        <button
          class="addAuthor"
          style="color:#0139FD;border:1px solid #0139FD;font-size:14px"
        >添加视图接口权限</button>
        <el-form ref="ruleForm" :model="ruleForm" status-icon class="demo-ruleForm">
          <el-tabs :tab-position="tabPosition">
            <el-select v-model="ruleForm.valuesF" placeholder="请选择身份id">
              <el-option
                v-for="(item,index) in allViewsQX"
                :key="index"
                :label="item.view_authority_text"
                :value="item.view_authority_id"
              />
            </el-select>
          </el-tabs>
          <el-form-item>
            <el-button class="true" type="primary" @click="submitFormF()">确定</el-button>
            <el-button class="reset" @click="resetFormF('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="five">
        <button
          class="addAuthor"
          style="color:#0139FD;border:1px solid #0139FD;font-size:14px"
        >给身份设置api接口权限</button>
        <el-form ref="ruleForm" :model="ruleForm" status-icon class="demo-ruleForm">
          <el-tabs :tab-position="tabPosition">
            <el-select v-model="valuesFive" placeholder="请选择身份id">
              <el-option v-for="(item,index) in shenfen" :key="index" :value="item" />
            </el-select>
          </el-tabs>
          <el-tabs :tab-position="tabPosition">
            <el-select
              v-model="valuesFiveTwo"
              style="color:#0139FD;border:1px solid #0139FD;font-size:14px"
              placeholder="请选择api接口权限"
            >
              <el-option
                v-for="item in allGuanXi"
                :key="item.identity_api_authority_relation_id"
                :value="item.api_authority_text"
              />
            </el-select>
          </el-tabs>
          <el-form-item>
            <el-button class="true" type="primary" @click="submitFormFive('ruleForm')">确定</el-button>
            <el-button class="reset" @click="resetFormFive('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="six">
        <button class="addAuthor" style="color:#0139FD;border:1px solid #0139FD">给身份设置视图权限</button>
        <el-form ref="ruleForm" :model="ruleForm" status-icon class="demo-ruleForm">
          <el-tabs :tab-position="tabPosition">
            <el-select v-model="valuesSix" placeholder="请选择身份id">
              <el-option v-for="(item,index) in shenfen" :key="index" :value="item" />
            </el-select>
          </el-tabs>
          <el-tabs :tab-position="tabPosition">
            <el-select v-model="valuesSixTwo" placeholder="请选择视图权限id">
              <el-option
                v-for="(item, index) in allViewsQX"
                :key="index"
                :value="item.view_authority_text"
              />
            </el-select>
          </el-tabs>
          <el-form-item>
            <el-button class="true" type="primary" @click="submitFormSix('ruleForm')">确定</el-button>
            <el-button class="reset" @click="resetFormSix('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addAuthor,
  addYongHu,
  authorityView,
  setIdentityApi,
  setIdentityView
} from '@/api/addpaperList'
import { mapState, mapActions } from 'vuex'
import AddApiQuanXi from '@/components/addApiQuanXi/index'
export default {
  components: { AddApiQuanXi },
  data() {
    return {
      buttons: ['添加用户', '更新用户'],
      input: '',
      tabPosition: 'top',
      value: '',
      valuesFour: '',
      valuesFive: '',
      valuesFiveTwo: '',
      valuesSix: '',
      valuesSixTwo: '',
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        valuesF: '',
        values: ''
      },
      numberValidateForm: {
        author: ''
      }
    }
  },
  computed: {
    ...mapState({
      allShenFen: state => state.paperList.allShenFen,
      shenfen: state => state.paperList.shenfen,
      allViewsQX: state => state.paperList.allViewsQX,
      allGuanXi: state => state.paperList.allGuanXi,
      userNPID: state => state.paperList.userNPID
    })
  },
  async created() {
    await this.authorAll()
    await this.authorIDentity()
    await this.viesQuanXI()
    await this.authorGuanXi()
  },
  methods: {
    ...mapActions({
      authorAll: 'paperList/authorAll',
      viesQuanXI: 'paperList/viesQuanXI',
      authorGuanXi: 'paperList/authorGuanXi',
      authorIDentity: 'paperList/authorIDentity'
    }),
    addAuthor() {
      // one的事件
      this.$refs.select.$el.style = 'display:none'
      document.querySelector('.newAuthor').style = 'none'
    },
    gNew() {
      // one的事件
      this.$refs.select.$el.style = 'display:block'
      document.querySelector('.newAuthor').style =
        'color:#0139FD;border:1px solid #0139FD'
      document.querySelector('.addAuthor').style = 'none'
    },
    submitForm() {
      // one的事件
      const user_name = this.ruleForm.pass
      const user_pwd = this.ruleForm.checkPass
      // 密码必须为 一个大写字母+一个小写字母+一个数字+一个特殊字符 == 长度必须大于6
      addYongHu({ user_name: user_name, user_pwd: user_pwd }).then(res => {

      })
    },
    resetForm(formName) {
      // one的事件
      this.$refs[formName].resetFields()
      this.ruleForm.pass = ''
      this.ruleForm.checkPass = ''
      this.ruleForm.values = ''
    },
    submitFormTWO() {
      // two的事件  添加身份
      addAuthor({ identity_text: this.numberValidateForm.author })
    },
    resetFormTWO(formName) {
      // two的事件
      this.$refs[formName].resetFields()
    },
    submitFormF() {
      // four的事件
      const str = this.ruleForm.valuesF
      const data = this.allViewsQX.filter(item => item.view_authority_id === str)

      authorityView({
        view_authority_text: data[0].view_authority_text,
        view_id: data[0].view_authority_id
      }).then(res => {
        console.log(res)
      })
    },
    resetFormF(formName) {
      // four的事件
      this.$refs[formName].resetFields()
      this.valuesF = ''
    },
    submitFormFive(formName) {
      // five的事件
      setIdentityApi({
        identity_id: this.valuesFive,
        api_authority_id: this.valuesFiveTwo
      }).then(res => {
        console.log(res, '给身份设定api接口权限设置成功')
      })
    },
    resetFormFive(formName) {
      // five的事件
      this.$refs[formName].resetFields()
      this.valuesFive = ''
      this.valuesFiveTwo = ''
    },
    submitFormSix(formName) {
      // six的事件
      setIdentityView({
        identity_id: this.valuesSix,
        view_authority_id: this.valuesSixTwo
      }).then(res => {
        console.log(res, '给身份设定视图权限成功')
      })
    },
    resetFormSix(formName) {
      // six的事件
      this.$refs[formName].resetFields()
      this.valuesSix = ''
      this.valuesSixTwo = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-left: 20px;
  background: #f1f1f1;
}
.con {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.one,
.two,
.three,
.four,
.five,
.six {
  width: 33%;

  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.addAuthor,
.newAuthor {
  background: #ffff;
  border: 1px solid #eeeeee;
  line-height: 32px;
  margin-left: 10px;
  margin-top: 10px;
}
.demo-ruleForm {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.ant-input {
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}
.true {
  width: 111px;
  height: 32px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
  border: none;
  margin-right: 10px;
  line-height: 11px;
}
.reset {
  width: 63px;
  height: 32px;
  line-height: 11px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 2px;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
}
</style>
