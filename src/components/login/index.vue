<template>
  <div class="wrapper">
    <div class="login">
        <div class="login-title"><h3>管理系统登录</h3></div>
        <div class="login-form">
          <el-form :model="loginForm" label-width="100px" ref="loginForm" :rules="rules">
            <el-form-item label="账号：" prop="userName">
              <el-input type="text" v-model="loginForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox label="记住密码" name="remberMe"></el-checkbox>
              <el-button @click="submitLogin" class="submit" type="primary" size="mini">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
  </div>
</template>

<script>
  import loginApi from '@/api/login';
  import router from '@/router';

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          userName: '',
          password: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '密码长度在6到20个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            loginApi(this.loginForm.userName, this.loginForm.password)
            .then(function(data) {
              console.log(data.data);
              if (data.data.status === 1) {
                console.log(self.$route);
                router.push('MainPage');
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style>
  .wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #edad3c;
  }
  .login{
    width: 500px;
    margin: 200px auto;
    padding: 20px;
    border: solid 1px #459cc4;
    box-shadow: 1px 1px 8px #459cc4;
    background-color: #fff;
  }
  .login-title{
    text-align: center;
    margin-bottom: 25px;
  }
  .submit{
    float: right;
  }
</style>