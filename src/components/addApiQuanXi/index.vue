<!--
 * @Author: your name
 * @Date: 2019-12-25 08:37:22
 * @LastEditTime: 2019-12-25 08:40:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\components\addApiQuanXi\index.vue
 -->
<template>
    <div>
        <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="pass">
                <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="api接口权限名称"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="text" v-model="ruleForm.checkPass" autocomplete="off" placeholder="api接口权限url"></el-input>
            </el-form-item>
            <el-form-item prop="age">
                <el-input v-model.number="ruleForm.age" placeholder="api接口权限方法"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="true" type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { authorityApi } from '@/api/addpaperList'
  export default {
    data() {
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
      };
    },
    methods: {
      submitForm(formName) {
        authorityApi({
          api_authority_text: this.ruleForm.pass,
          api_authority_url: this.ruleForm.checkPass,
          api_authority_method: this.ruleForm.age
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
div{
    margin-left: 3px;
    margin-right: 10px;
    margin-top:10px
}
.true{
    width: 111px;
    height: 32px;
    border-radius: 4px;
    font-size: 14px;
    color:white;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    border: none;
    margin-right: 10px;
    line-height:11px;
}
</style>