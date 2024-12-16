<template>
    <div class="login-container">
        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback label="邮箱" prop="email">
            <a-input v-model.trim="ruleForm.email" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="password">
            <a-input v-model="ruleForm.password" type="password"/>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="submitForm('ruleForm')">
            提交
            </a-button>
            <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
            重置
            </a-button>
        </a-form-model-item>
        </a-form-model>
    </div>
   
  </template>
  <script>
import api from '@/api/user.js'
  export default {
    data() {
      let emailReg = /^[\w-]+@[\w.-]+.com$/
      let checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入邮箱'));
        }
        if (emailReg.test(value)) {
            return callback();
        } else {
            return callback(new Error('邮箱格式不正确'));
        }
         
      };
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
         return callback(new Error('请输入密码'));
        } else {
         return callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          email: '',
        },
        rules: {
          password: [{ validator: validatePassword, trigger: 'change' }],
          email: [{ validator: checkEmail, trigger: 'change' }],
        },
        layout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        },
      };
    },
    methods: {
      submitForm(formName) {
        console.log('this',this.ruleForm)
        this.$refs[formName].validate(valid => {
          if (valid) {
            api.loginApi(this.ruleForm).then(res=>{
              console.log(res)
              if (res.status == 'success') {
                this.$message.success(res.msg);
                this.$router.push({path: '/home'})
                this.$store.dispatch('setUserInfo',res.data)
              } else {
                this.$message.error(res.msg);
              }
            }).catch(err=>{
              this.$message.error(err);
            })
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  };
  </script>
  <style lang="less">
  @import url("@/assets/css/login.less");
</style>
  