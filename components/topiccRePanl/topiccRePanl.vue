<!--消息通知面板-->
<template>
  <div style="width:80%;min-height:550px;height:auto;margin:0 auto">
    <div class="input-div">
    <span class="label">类型：</span>
   <el-select v-model="seleType" clearable placeholder="请选择" @change="loadTopic">
   <el-option
      v-for="item in postType"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>

  <!--模板-->
  <div v-show="seleType==1">
  <div class="input-div"><span class="label">标题：</span><el-input placeholder="请输入标题" v-model="title" clearable class="full"></el-input></div>
   <div class="input-div"><span class="label">内容：</span><el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" 
          v-model="content" class="full"></el-input>
   </div>
  <div class="input-div">
  <span class="label">封面图像：</span><el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
  </div>
  <div class="input-div">
  <span class="label">九宫格缩略图：</span>
        <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>

    </div>

    <div v-show="seleType==2">
    <div class="input-div">
      <span class="label">选择话题：</span>
      <el-select v-model="seleTopic" clearable placeholder="请选择" style="width:840px;">
       <el-option
         v-for="item in topicList"
         :key="item.id"
         :label="item.title"
         :value="item.id">
       </el-option>
     </el-select>
    </div>
    <div class="input-div"><span class="label">内容：</span><el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" 
          v-model="content" class="full"></el-input>
   </div> 

    </div>
    <div class="input-div">
      <span class="label">选择发表人：</span>
      <el-select v-model="seleUser" clearable placeholder="请选择" style="width:840px;">
      <el-option
         v-for="item in resData.data.users"
         :key="item.id"
         :label="item.nickname"
         :value="item.id">
     </el-option>
     </el-select>
   </div>
     <div style="margin-top: 15px;">
     <el-button type="info" @click="reset">重置</el-button>
     <el-button type="primary" @click="crePost">创建</el-button>
    </div>
  </div>
</template>

<script>
import fetch from '../../src/fetch.js'
export default {
  name: 'usercRePanl',
  data () {
    return {
      postType:[{
          value: '1',
          label: '话题'
        }, {
          value: '2',
          label: '投稿'
        }],
        resData:null,
        topicArr:[
        { 
          value: '1',
          label: '测试1'
        }, {
          value: '2',
          label: '测试2'
        }
        ],
        seleType: '1',
        seleUser:'',
        seleTopic:'',
        title:'',
        content:'',
        topicList:[],
        firstLoad:true,//第一次加载话题列表
        fileList: []
    }
  },
  created(){
    this.init();
  },
   methods: {
     //创建话题或者投稿
     //banner:封面图像，不必须字段
     //thumbnails：九宫格缩略图，不必须字段
      crePost(){
        if(this.$data.seleType=='1'){
          //发布话题
          fetch.post('/admin/post/create-post',{
              type:this.$data.seleType,
              title:this.$data.title,
              text:this.$data.content,
              userId:this.$data.seleUser
          }).then(res=>{
               console.log('提交话题成功---------------------------',res.data);
                 this.$notify({
                    title: '成功',
                    message: '发布话题成功！',
                    type: 'success'
                 });
              //清空数据
             this.$data.title='';
             this.$data.content='';
             this.$data.seleUser='';
          }).catch(err=>{
                this.$notify.err({
                  title:'失败',
                  message:'发布话题失败！'
                 })
          })
        }else{
          //发布投稿
          fetch.post('/admin/post/create-answer',{
             type:this.$data.seleType,
             refPostId:this.$data.seleTopic,
             text:this.$data.content,
             userId:this.$data.seleUser
          }).then(res=>{
            console.log('发布投稿成功-----------------------',res.data);
             this.$notify({
                    title: '成功',
                    message: '发布投稿成功！',
                    type: 'success'
            });
            this.$data.content='';
            this.$data.seleUser='';
            this.$data.seleTopic='';
          }).catch(err=>{
            console.log('发布投稿失败---------------',err);
              this.$notify.err({
                  title:'失败',
                  message:'发布投稿失败！'
                })
          })
        }
      },
      loadTopic(){
         //懒加载话题列表
         if(this.$data.seleType=='2'&&this.$data.firstLoad){
           fetch.get('/admin/user/post/list',{
             cursor:0,
             limit:1000
           }).then(res=>{
              console.log('懒加载话题列表----------',res);
              this.$data.firstLoad=false;
              this.$data.topicList=res.data.posts.filter(ele=>{
                return ele.type=='1';
              });
              console.log('过滤结果-----------------',this.$data.topicList);
           }).catch(err=>{

           });
         }
     },
     init(){
       //加载user绑定
       fetch.get('/admin/user',{
        cursor:0,
        limit:1000
       }).then(res=>{
        console.log('接受到的用户列表--------------',res);
        this.$data.resData=res;
       }).catch(err=>{

       })
     },
     reset(){
       //重置按钮
       if(this.$data.seleType=='1'){
             //清空数据
             this.$data.title='';
             this.$data.content='';
             this.$data.seleUser='';
       }else{
          this.$data.content='';
          this.$data.seleUser='';
          this.$data.seleTopic='';
       }
        this.$notify.info({
          title: '重置',
          message: '已清空草稿！'
        });
     },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>

<style scoped>
/*scoped代表组件的私有样式（防止样式污染） 不包括import的css文件*/
  .full{
    width:100%
  }
  @import url('topiccRePanl.css');
</style>
