<!--消息通知面板-->
<template>
  <div style="padding-top: 10px;">
    <span class="alert-text">暂无消息</span>
    <el-row style="width:auto;display:flex;justify-content: space-evenly;">
      <el-col style="width: 180px;">
        <el-card :body-style="{ padding: '0px' }" style="background-color:#c6d2d1">
          <img  src="../../assets/home_user.png" class="image">
          <div style="padding: 14px;background-color:#FFF">
            <span>新增粉丝</span>
            <div class="bottom clearfix">
              <time class="time">999</time>
              <el-button type="text" class="button">查看更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col style="width: 180px;">
        <el-card :body-style="{ padding: '0px' }" style="background-color:#d8cd5a">
          <img src="../../assets/home_user.png" class="image">
          <div style="padding: 14px;background-color:#FFF">
            <span>热门话题</span>
            <div class="bottom clearfix">
              <time class="time">999</time>
              <el-button type="text" class="button">查看更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
        <el-col style="width: 180px;">
        <el-card :body-style="{ padding: '0px' }" style="background-color:#5ad893">
          <img src="../../assets/home_user.png" class="image">
          <div style="padding: 14px;background-color:#FFF">
            <span>数据分析</span>
            <div class="bottom clearfix">
              <time class="time">999</time>
              <el-button type="text" class="button">查看更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
        <el-col style="width: 180px;">
        <el-card :body-style="{ padding: '0px' }" style="background-color:#c181b6">
          <img src="../../assets/home_user.png" class="image">
          <div style="padding: 14px;background-color:#FFF">
            <span>用户TOP
            </span>
            <div class="bottom clearfix">
              <time class="time">SunDa等...</time>
              <el-button type="text" class="button">查看更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "alertsPanl",
  data() {
    return {
      currentDate:new Date().toLocaleString()
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
@import url("alertsPanl.css");
</style>
