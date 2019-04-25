<template>
  <div style="width:100%;height:auto;">
    <div class="container" style="background-color: rgb(96, 125, 139);">
      <div class="header">
        <div class="user-border">
          <img src="../assets/user.png" class="user">
        </div>
        <span class="username">游明星</span>
        <el-button plain class="logout-btn" @click="loginOut">退出</el-button>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="left-navi">
          <!--左侧可折叠面板-->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="主页" name="1">
              <div><router-link to="/home">消息通知</router-link></div>
            </el-collapse-item>
             <el-collapse-item title="话题" name="2">
              <div><router-link to="/topic">话题查看</router-link></div>
              <div><router-link to="/topic/create">话题创建</router-link></div>
            </el-collapse-item>

            <el-collapse-item title="投稿" name="3">
              
              <div><router-link to="/post">投稿查看</router-link></div>
              <div><router-link to="/post/create">创建投稿</router-link></div>
            </el-collapse-item>

            <el-collapse-item title="用户" name="4">
            <div><router-link to="/user">用户查看</router-link></div>
            <div><router-link to="/user/create">用户创建</router-link></div>
            <div><router-link to="/user/back">用户反馈</router-link></div>
            </el-collapse-item>


          </el-collapse>
        </div>
        <!--右侧表格区域-->
        <div style="width:85%;min-height:550px;height:auto;">
           <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      activeNames: []
    };
  },
  components: {},
  methods: {
    loginOut() {
      this.$router.push("/");
    },
    handleChange() {}
  }
};
</script>

<style>
@import url("index.css");
</style>
