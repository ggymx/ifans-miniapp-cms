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
              <div class="item"><router-link to="/index/home">消息通知</router-link></div>
            </el-collapse-item>
             <el-collapse-item title="话题" name="2">
              <div class="item"><router-link to="/index/topic">话题查看</router-link></div>
              <div class="item"><router-link to="/index/topicCre">话题创建</router-link></div>
            </el-collapse-item>

            <el-collapse-item title="投稿" name="3">
              
              <div class="item"><router-link to="/index/post">投稿查看</router-link></div>
              <div class="item"><router-link to="/index/topicCre">投稿创建</router-link></div>
            </el-collapse-item>

            <el-collapse-item title="用户" name="4">
            <div class="item"><router-link to="/index/user">用户查看</router-link></div>
            <div class="item"><router-link to="/index/userCre">用户创建</router-link></div>
            <div class="item"><router-link to="/index/userBack">用户反馈</router-link></div>
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
  created(){
    const loading = this.$loading({
          lock: true,
          text: '登录中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 500);
  },
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
