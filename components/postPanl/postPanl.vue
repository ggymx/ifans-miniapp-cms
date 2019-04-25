<!--消息通知面板-->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" stripe
     v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-table-column prop="postID" label="投稿ID" width="90"></el-table-column>
      <el-table-column prop="postTittle" label="投稿标题" width="180"></el-table-column>
      <el-table-column prop="postDes" label="投稿描述" width="280"></el-table-column>
      <el-table-column prop="postBrow" label="浏览量" width="100"></el-table-column>
      <el-table-column prop="postPar" label="参与量" width="100"></el-table-column>
      <el-table-column prop="postCre" label="新建人" width="100"></el-table-column>
      <el-table-column prop="postTime" label="新建时间" width="95"></el-table-column>
      <el-table-column prop="isUp" label="是否置顶" width="95"></el-table-column>
      <el-table-column prop="status" label="状态" width="95"></el-table-column>
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
    <el-button type="primary">添加</el-button>
    <el-button type="info">置顶</el-button>
    <el-button type="danger" @click="del">删除</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "postPanl",
  data() {
    return {
      loading:true,
      tableData: [
        {
          postID: 1,
          postTittle: "tittle",
          postDes: "描述",
          postBrow: 999,
          postPar: 888,
          postCre: "张三",
          postTime: "2018-01-01 11:11:11",
          isUp: "是",
          status: "正常"
        },
        {
          postID: 1,
          postTittle: "tittle",
          postDes: "描述",
          postBrow: 999,
          postPar: 888,
          postCre: "李四",
          postTime: "2018-01-01 11:11:11",
          isUp: "是",
          status: "正常"
        },
        {
          postID: 1,
          postTittle: "tittle",
          postDes: "描述",
          postBrow: 999,
          postPar: 888,
          postCre: "李四",
          postTime: "2018-01-01 11:11:11",
          isUp: "是",
          status: "正常"
        }
      ]
    };
  },
  created(){
    setTimeout(() => {
      this.$data.loading=false;
    }, 500);
  },
  methods:{
       del() {
        this.$confirm('是否删除该用户？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
  }
};
</script>

<style>
 @import url('postPanl.css');
</style>
