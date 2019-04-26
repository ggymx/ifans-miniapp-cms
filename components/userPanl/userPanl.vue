<!--消息通知面板-->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" stripe
      v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)">
      <el-table-column prop="ID" label="ID" width="90"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="200"></el-table-column>
      <el-table-column prop="regInfo" label="注册信息" width="150"></el-table-column>
      <el-table-column prop="createAt" label="注册时间" width="250"></el-table-column>
      <el-table-column prop="updateAt" label="修改时间" width="250"></el-table-column>
    </el-table>
    <!--分页-->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 8, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      :pager-count="6"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'userPanl',
  data () {
    return {
    loading:true,
     tableData:[
       {
         ID:1,
         nickname:'SunDa',
         regInfo:'wxapp',
         createAt:'2019-04-04T10:09:51.371Z',
         updateAt:'2019-05-04T10:09:51.371Z'
       },
         {
         ID:1,
         nickname:'SunDa',
         regInfo:'wxapp',
         createAt:'2019-04-04T10:09:51.371Z',
         updateAt:'2019-05-04T10:09:51.371Z'
       },
         {
         ID:1,
         nickname:'SunDa',
         regInfo:'wxapp',
         createAt:'2019-04-04T10:09:51.371Z',
         updateAt:'2019-05-04T10:09:51.371Z'
       },  
       {
         ID:1,
         nickname:'SunDa',
         regInfo:'wxapp',
         createAt:'2019-04-04T10:09:51.371Z',
         updateAt:'2019-05-04T10:09:51.371Z'
       }
     ]
    }
  },
  created(){
    setTimeout(() => {
      this.$data.loading=false;
    }, 500);
  }
}
</script>

<style>
 @import url('userPanl.css');
</style>
