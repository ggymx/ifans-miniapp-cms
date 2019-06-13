import Vue from 'vue'
import App from './App.vue'

import router from './router.js'
import store from './models/store.js'

import elementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';


Vue.use(elementUI);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
