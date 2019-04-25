import Vue from 'vue'
import App from './App.vue'

import router from './router.js'

import elementUI from 'element-ui'

Vue.use(elementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
