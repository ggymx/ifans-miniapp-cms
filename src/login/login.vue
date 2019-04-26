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
import fetch from '../fetch.js'
export default {
  name: 'login',
  data () {
    return {
      username:'',
      pwd:'',
      userCount:0
    }
  },
  components:{

  },
  methods:{
    loginIn(){
      console.log('username---------',this.$data.username);
      if(this.$data.username==''||this.$data.pwd==''){
        this.$message.error('用户名或密码不能为空！');
        return;
      }
      fetch.post('/admin/login',{
        username:this.$data.username,
        password:this.$data.pwd
      }).then(res=>{
        //缓存用户名和token
        sessionStorage.setItem('username',res.user.username);
        sessionStorage.setItem('token',res.token);
        this.$message({
          message: '欢迎'+this.$data.username+'回来！',
          type: 'success'
        });
          this.$router.push('./index')
      }).catch(err=>{
        console.log('this.$data.userCount-----',this.$data.userCount)
          if(this.$data.userCount>=5){
            console.log('登录错误次数过多');
           this.$message.error('错误次数过多，请尝试联系超级管理员！');
          }else{
          this.$message.error('用户名或密码有误！');
          this.$data.userCount++;
          }     
      });
        //测试
        this.$router.push('./index')
    
    }
  }
}
</script>

<style>
    @import url('login.css');
</style>
