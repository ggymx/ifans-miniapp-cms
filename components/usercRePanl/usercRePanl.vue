<!--消息通知面板-->
<template>
  <div style="width:80%;min-height:550px;height:auto;margin:0 auto">
  <div class="input-div"><span class="label">昵称：</span><el-input placeholder="请输入昵称" v-model="title" clearable class="full"></el-input></div>
   <div class="input-div"><span class="label">头像：</span><el-input placeholder="请输入URL" v-model="title" clearable class="full"></el-input></div>
   <div class="input-div">
    <el-button type="info" @click="reset">重置</el-button>
     <el-button type="primary" @click="creUser">创建</el-button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'usercRePanl',
  data () {
    return {
      options:[{
          value: '选项1',
          label: '话题'
        }, {
          value: '选项2',
          label: '投稿'
        }],
        value: '',
        title:'',
        content:'',
        fileList: []
    }
  },
   methods: {
       creUser() {
        this.$notify({
          title: '成功',
          message: '成功创建一个用户',
          type: 'success'
        });
      },
        reset() {
        this.$notify.info({
          title: '消息',
          message: '已清空一个正在创建中的用户'
        });
      }

    }
}
</script>

<style scoped>
 /*scoped代表组件的私有样式（防止样式污染） 不包括import的css文件*/
  .full{
    width:100%
  }
  @import url('usercRePanl.css');
</style>
