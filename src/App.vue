<template>
  <div id="app" style="width:100%;margin-top:0px;">
     <router-view></router-view>
     <!-- <login></login> -->
  </div>
</template>

<script>
import login from './login/login.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    login
  }
}
</script>

<style>
 
</style>
