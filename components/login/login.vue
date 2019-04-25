<template>
      <div class="login">
          <div style="width:600px;height:400px;display:flex;justify-content: center;flex-direction: column;align-items: center;margin-top: 60px;">
                  <img src="../../src/assets/admin_logo.png" style="width:500px;height:150px">
                  <div style="background-color:#FFF;width:350px;height:auto;box-shadow: 1px 0px 20px 6px #9e9e9e">
                        <el-input placeholder="username" v-model="username" clearable style="margin-top: 10px;width: 300px;margin-left: 25px;"></el-input>
                        <el-input placeholder="possword" v-model="pwd" show-password style="margin-top: 10px;width: 300px;margin-left: 25px;"></el-input>
                        <el-button type="primary" style="margin-top: 10px;width: 300px;margin-left: 25px;background-color: #01a1a1;border-color: #01a1a1;margin-bottom:10px;">login</el-button>
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

  }
}
</script>

<style>
    @import url('login.css');
</style>
