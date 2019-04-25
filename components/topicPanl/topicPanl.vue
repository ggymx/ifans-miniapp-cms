<!--消息通知面板-->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" stripe
     v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-table-column prop="ID" label="ID" width="50"></el-table-column>
      <el-table-column prop="Type" label="类型" width="60"></el-table-column>
      <el-table-column prop="Tittle" label="标题" width="180"></el-table-column>
      <el-table-column prop="Text" label="内容" width="280"></el-table-column>
      <el-table-column prop="creatUser" label="创建人" width="100"></el-table-column>
      <el-table-column prop="RefTopic" label="关联话题" width="100"></el-table-column>
      <el-table-column prop="creatAt" label="创建时间" width="100"></el-table-column>
      <el-table-column prop="IsUp" label="是否置顶" width="95"></el-table-column>
      <el-table-column prop="status" label="状态" width="95"></el-table-column>
      <el-table-column prop="View" label="浏览量" width="95"></el-table-column>
      <el-table-column prop="Join" label="参与量" width="95"></el-table-column>
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
      :pager-count="11">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "topicPanl",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      loading:true,
      tableData: [
        {
          ID: 72,
          Type: 1,
          Tittle: "前端的三大框架，你喜欢哪一个？",
          Text:
            "俗话说唐朝的富贵之花是牡丹，陶渊明独爱菊，还有让人清高的荷花，春风满面的桃花，可以说每个人的心中都有自己喜欢的花，诸位客官，你们喜欢什么花？",
          creatUser: 6,
          RefTopic: "null",
          creatAt: "undefined",
          IsUp: "undefined",
          status: 2,
          View: "undefined",
          Join: "undefined"
        },
        {
          ID: 72,
          Type: 1,
          Tittle: "前端的三大框架，你喜欢哪一个？",
          Text:
            "俗话说唐朝的富贵之花是牡丹，陶渊明独爱菊，还有让人清高的荷花，春风满面的桃花，可以说每个人的心中都有自己喜欢的花，诸位客官，你们喜欢什么花？",
          creatUser: 6,
          RefTopic: "null",
          creatAt: "undefined",
          IsUp: "undefined",
          status: 2,
          View: "undefined",
          Join: "undefined"
        },
        {
          ID: 72,
          Type: 1,
          Tittle: "前端的三大框架，你喜欢哪一个？",
          Text:
            "俗话说唐朝的富贵之花是牡丹，陶渊明独爱菊，还有让人清高的荷花，春风满面的桃花，可以说每个人的心中都有自己喜欢的花，诸位客官，你们喜欢什么花？",
          creatUser: 6,
          RefTopic: "null",
          creatAt: "undefined",
          IsUp: "undefined",
          status: 2,
          View: "undefined",
          Join: "undefined"
        },
        {
          ID: 72,
          Type: 1,
          Tittle: "前端的三大框架，你喜欢哪一个？",
          Text:
            "俗话说唐朝的富贵之花是牡丹，陶渊明独爱菊，还有让人清高的荷花，春风满面的桃花，可以说每个人的心中都有自己喜欢的花，诸位客官，你们喜欢什么花？",
          creatUser: 6,
          RefTopic: "null",
          creatAt: "undefined",
          IsUp: "undefined",
          status: 2,
          View: "undefined",
          Join: "undefined"
        },
        {
          ID: 72,
          Type: 1,
          Tittle: "前端的三大框架，你喜欢哪一个？",
          Text:
            "俗话说唐朝的富贵之花是牡丹，陶渊明独爱菊，还有让人清高的荷花，春风满面的桃花，可以说每个人的心中都有自己喜欢的花，诸位客官，你们喜欢什么花？",
          creatUser: 6,
          RefTopic: "null",
          creatAt: "undefined",
          IsUp: "undefined",
          status: 2,
          View: "undefined",
          Join: "undefined"
        }
      ]
    };
  },
  created(){
    setTimeout(() => {
      this.$data.loading=false
    }, 500);
  }
};
</script>

<style>
</style>
