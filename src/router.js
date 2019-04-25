//路由配置
import Vue from 'vue';
import Router from 'vue-router';

//引入组件
import login from '../components/login/login.vue'

//Vue全局引用路由模块
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/login',
            component:login
        },
        {
            //默认路由
            path:'/',
            redirect:'/login'
        }
    ]
})