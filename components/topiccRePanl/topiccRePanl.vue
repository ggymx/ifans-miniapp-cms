<!--消息通知面板-->
<template>
  <div style="width:80%;min-height:550px;height:auto;margin:0 auto">
    <div class="input-div">
    <span class="label">类型：</span>
   <el-select v-model="seleType" clearable placeholder="请选择" @change="test">
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
      <el-select v-model="seleTopic" clearable placeholder="请选择" @change="test" style="width:840px;">
       <el-option
         v-for="item in topicArr"
         :key="item.value"
         :label="item.label"
         :value="item.value">
       </el-option>
     </el-select>
    </div>
    <div class="input-div"><span class="label">内容：</span><el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" 
          v-model="content" class="full"></el-input>
   </div> 

    </div>
    <div class="input-div">
      <span class="label">选择发表人：</span>
      <el-select v-model="seleUser" clearable placeholder="请选择" @change="test" style="width:840px;">
      <el-option
         v-for="item in pubUser"
         :key="item.value"
         :label="item.label"
         :value="item.value">
     </el-option>
     </el-select>
   </div>
     <div style="margin-top: 15px;">
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
      postType:[{
          value: '1',
          label: '话题'
        }, {
          value: '2',
          label: '投稿'
        }],
        pubUser:[{
          value: '1',
          label: 'SunDa'
        }, {
          value: '2',
          label: '花仙子'
        }],
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
        fileList: []
    }
  },
   methods: {
      test(){
        console.log('selectType-----------------',this.$data.seleType);
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
