<template>
<div style="width:100%;height:auto;">
  <div style="width:100%;height:auto">
    <div class="header">
      <div class="container">
        <div class="user-border">
          <img src="../assets/user.png" class="user">
        </div>
        <span class="username">游明星</span>
        <el-button plain class="logout-btn" @click="loginOut">退出</el-button>
      </div>
    </div>
  </div>
      <div class="content">
        <div class="left-navi">
          <!--左侧可折叠面板-->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Home" name="1">
              <div>test</div>
              <div>test</div>
            </el-collapse-item>
            <el-collapse-item title="Topic" name="2">
              <div>test</div>
              <div>test</div>
            </el-collapse-item>
            <el-collapse-item title="Post" name="3">
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </el-collapse-item>
            <el-collapse-item title="Report" name="4">
              <div>test</div>
              <div>test</div>
            </el-collapse-item>
             <el-collapse-item title="User" name="5">
              <div>test</div>
              <div>test</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div style="width:85%;min-height:550px;height:auto;background-color:pink"></div>
      </div>
</div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
    activeNames:[]
    };
  },
  components: {},
  methods: {
    loginOut() {
      this.$router.push("/");
    },
    handleChange(){

    }
  }
};
</script>

<style>
@import url("index.css");
</style>
