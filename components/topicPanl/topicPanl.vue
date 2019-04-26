<!--消息通知面板-->
<template>
  <div>
    <!--顶部的条件搜索区-->
    <div style="margin-top:10px;margin-left: 10px;display: flex;align-items: center;">
    <span class="label" style="margin-left:0px">类型：</span>
    <el-select v-model="typed" placeholder="请选择" style="width: 100px;height:35px">
    <el-option
      v-for="item in typeOpt"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
   </el-select>

   <span class="label">创建人：</span>
   <el-input
    placeholder="输入创建人"
    v-model="creatUser"
    clearable style="width:120px;height:35px">
  </el-input>


    <span class="label">日期范围：</span>
     <el-date-picker
      v-model="selDate"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right" style="height: 35px;width: 230px;">
    </el-date-picker>

    <span class="label">高级搜索：</span>
      <div class="highSearch">
    
        <input class="custom-input" placeholder="高级搜索"/>
        <div class="edit-div" @click="searchMore"><i class="el-icon-edit"></i></div>
      </div>
       <el-button type="primary" icon="el-icon-search" class="custom-btn">搜索</el-button>
       <el-button type="primary" icon="el-icon-edit" class="custom-btn">创建</el-button>
    </div>

    <!--数据显示区域-->
    <el-table :data="tableData" style="width: 100%" stripe
     v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)">
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

    <!--高级搜索对话框-->
    <el-dialog
     title="高级搜索"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <div>
       <span>标题关键字：</span>
      <el-input
          placeholder="输入标题关键字"
         v-model="titleKey"
        clearable style="width:100%">
      </el-input>
        <span>内容关键字：</span>
      <el-input
         type="textarea"
         placeholder="请输入内容"
         v-model="contentKey"
         maxlength="300"
         show-word-limit>
      </el-input>

    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
   </span>
</el-dialog>
  </div>
</template>

<script>
import fetch from '../../src/fetch.js'
export default {
  name: "topicPanl",
  data() {
    return {
      titleKey:'',
      contentKey:'',
      dialogVisible:false,
      more:'',
      typeOpt:[
     {
          value: 'post',
          label: '投稿'
    },
    {
          value: 'topic',
          label: '话题'
    }
    ],
      typed:'',
       pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        selDate:'',
      loading:true,
      creatUser:'',
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
      ],
      resData:[]
    };
  },
  created(){
    setTimeout(() => {
      this.$data.loading=false
    }, 500);
  },
  methods:{
    //初始化数据
    init(){
      fetch.get('/admin/user/post/list',{
         cursor:0,
         limit:10
      }).then(res=>{
        console.log('resData-------------------------',res)
        this.$data.resData=res;
      }).catch(err=>{

      })
    },
    //高级匹配
    searchMore(){
      //  this.$alert('<strong>搜索标题</strong>', '高级查询', {
      //     dangerouslyUseHTMLString: true
      //   });
      //弹出对话框
      this.$data.dialogVisible=true
    },
     //点击叉号关闭对话框
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
     }
  }
};
</script>

<style>
 @import url('topicPanl.css');
</style>
