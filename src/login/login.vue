<template>
      <div class="login">
          <div style="width:600px;height:400px;display:flex;justify-content: center;flex-direction: column;align-items: center;margin-top: 60px;">
                  <img src="../assets/admin_logo.png" style="width:500px;height:150px">
                  <div style="background-color:#FFF;width:350px;height:auto;box-shadow: 1px 0px 20px 6px #9e9e9e">
                        <el-input placeholder="输入用户名" v-model="username" clearable style="margin-top: 10px;width: 300px;margin-left: 25px;"></el-input>
                        <el-input placeholder="输入密码" v-model="pwd" show-password style="margin-top: 10px;width: 300px;margin-left: 25px;"></el-input>
                        <el-button type="primary" style="margin-top: 10px;width: 300px;margin-left: 25px;background-color: #01a1a1;border-color: #01a1a1;margin-bottom:10px;" @click="loginIn">登录</el-button>
                  </div>
                 
          </div>
      </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username:'',
      pwd:''
    }
  },
  components:{

  },
  methods:{
    loginIn(){
      this.$router.push('./index')
    }
  }
}
</script>

<style>
    @import url('login.css');
</style>
