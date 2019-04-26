<!--消息通知面板-->
<template>
  <div style="width:80%;min-height:550px;height:auto;margin:0 auto">
    <div class="input-div">
    <span class="label">类型：</span>
   <el-select v-model="value" clearable placeholder="请选择">
   <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="input-div"><span class="label">标题：</span><el-input placeholder="请输入标题" v-model="title" clearable></el-input></div>
   <div class="input-div"><span class="label">内容：</span><el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" 
          v-model="content"></el-input>
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

<style>
  @import url('topiccRePanl.css');
</style>
