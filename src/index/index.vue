<template>
  <div style="width:100%;height:auto;">
    <div class="container" style="background-color: #3f506a;">
      <div class="header">
        <div class="user-border">
          <img src="../assets/user.png" class="user">
        </div>
        <span class="username">彭佳文</span>
        <el-button plain class="logout-btn" @click="loginOut">退出</el-button>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="left-navi">
          <!--左侧可折叠面板-->
      
          <div id="fold">
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
         
          <div class="fold" @click="flod_left">
              <img src="../assets/b.png" class="arrow-img">
          </div>
        </div>
        <!--右侧表格区域  width:85%;-->
        <div class="main">
           <router-view></router-view>
        </div>
      </div>
    </div>
    
    </div>
</template>
<script>
import fetch from '../fetch.js'
import $ from '../jquery-3.0.0.min.js'
export default {
  name: "index",
  data() {
    return {
      activeNames: [],
      username:''
    };
  },
  components: {},
  created(){
    this.$data.username=sessionStorage.getItem('username');
    const loading = this.$loading({
          lock: true,
          text: '加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        setTimeout(() => {
          loading.close();
        }, 500);
  },
  methods: {
    loginOut() {
      this.$router.push("/");
    },
    handleChange() {},
    flod_left(){
      /*动画效果可以在这里实现，用@click监听 */
      console.log('测试--------');
      $("#fold").animate({
         width:'toggle'
       });
       if($('.arrow-img').attr('src')==='src/assets/b.png'){
         $('.arrow-img').attr('src','src/assets/a.png')
       }else{
         $('.arrow-img').attr('src','src/assets/b.png')
       }
    }
  }
};

$(document).ready(function(){
  // 折叠动画
     /*jquery直接操作DOM，Vue是操作虚拟DOM，
     $('').click会在页面（index.html）首次加载时绑定事件，此时组件中的元素未被渲染，因此无法绑定*/
   //拖拽按钮
  
})

</script>

<style>
@import url("index.css");
</style>
