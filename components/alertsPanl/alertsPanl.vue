<!--消息通知面板-->
<template>
  <div style="padding-top: 10px;">
    <span class="alert-text">暂无消息</span>
    <el-row style="width:auto;display:flex">
      <el-col style="width: 250px;margin-left: 20px;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px;">
            <span>新增用户数</span>
            <div class="bottom clearfix">
              <time class="time">999</time>
              <el-button type="text" class="button">查看更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col style="width: 250px;margin-left: 20px;justify-content: space-evenly;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px;">
            <span>热门话题</span>
            <div class="bottom clearfix">
              <time class="time">999</time>
              <el-button type="text" class="button">查看更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
       <el-col style="width: 250px;margin-left: 20px;">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px;">
            <span>用户分析</span>
            <div class="bottom clearfix">
              <time class="time">999</time>
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
