<!--消息通知面板-->
<template>
   <div>
    <el-table :data="tableData" style="width: 100%" stripe
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)">
      <el-table-column prop="postID" label="序号" width="90"></el-table-column>
      <el-table-column prop="postTittle" label="类型" width="180"></el-table-column>
      <el-table-column prop="postDes" label="标题" width="280"></el-table-column>
      <el-table-column prop="postBrow" label="描述" width="100"></el-table-column>
      <el-table-column prop="postPar" label="举报人" width="100"></el-table-column>
      <el-table-column prop="postCre" label="内容" width="100"></el-table-column>
      <el-table-column prop="postTime" label="举报时间" width="95"></el-table-column>
      <el-table-column prop="isUp" label="处理状态" width="95"></el-table-column>
      <el-table-column prop="status" label="备注" width="95"></el-table-column>
    </el-table>
    <!--分页-->
    <div style="display:flex;align-items: center;">

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
    <el-button type="success">已受理</el-button>
    <el-button type="danger">不处理</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'backPanl',
  data () {
    return {
       loading:true,
       tableData: [
        {
          postID: 1,
          postTittle: '投稿',
          postDes: "某某话题",
          postBrow: '描述',
          postPar: '举报人',
          postCre: "违规信息",
          postTime: "2018-01-01 11:11:11",
          isUp: "已处理",
          status: "正常发布"
        },
        {
          postID: 1,
          postTittle: '投稿',
          postDes: "某某话题",
          postBrow: '描述',
          postPar: '举报人',
          postCre: "违规信息",
          postTime: "2018-01-01 11:11:11",
          isUp: "已处理",
          status: "正常发布"
        },
         {
          postID: 1,
          postTittle: '投稿',
          postDes: "某某话题",
          postBrow: '描述',
          postPar: '举报人',
          postCre: "违规信息",
          postTime: "2018-01-01 11:11:11",
          isUp: "已处理",
          status: "正常发布"
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
 
</style>
