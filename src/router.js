//路由配置
import Vue from 'vue';
import Router from 'vue-router';

//引入组件
import login from './login/login.vue'
import index from './index/index.vue'
import alert from '../components/alertsPanl/alertsPanl.vue'
import user from '../components/userPanl/userPanl.vue'
import userCre from '../components/usercRePanl/usercRePanl.vue'
import topic from '../components/topicPanl/topicPanl.vue'
import topicCre from '../components/topiccRePanl/topiccRePanl.vue'
import post from '../components/postPanl/postPanl.vue'
import postCre from '../components/postcRePanl/postcRePanl.vue'
import userBack from '../components/backPanl/backPanl.vue'

//Vue全局引用路由模块
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: '/index',
            component: index,
            children: [
                {
                    path: 'home',
                    component: alert
                },
                {
                    path: 'topic',
                    component: topic
                },
                {
                    path: 'topicCre',
                    component: topicCre
                },
                {
                    path: 'post',
                    component: post
                },
                {
                    path: 'postCre',
                    component: postCre
                },
                {
                    path: 'user',
                    component: user
                },
                {
                    path: 'userCre',
                    component: userCre
                },
                {
                    path: 'userBack',
                    component: userBack
                },
                {
                    path:'/index',
                    redirect:'/index/home'
                }
            ]
        },
        {
            //默认路由
            path: '/',
            redirect: '/login'
        }
    ]
})