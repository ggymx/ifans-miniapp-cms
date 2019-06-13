//路由配置
import Vue from 'vue';
import Router from 'vue-router';
// import VueRouter from 'vue-router';

//引入组件
import login from './views/login/login.vue'
import index from './views/index/index.vue'
import alert from './components/alertsPanl/alertsPanl.vue'
import user from './components/userPanl/userPanl.vue'
import userCre from './components/usercRePanl/usercRePanl.vue'
import topic from './components/topicPanl/topicPanl.vue'
import topicCre from './components/topiccRePanl/topiccRePanl.vue'
import post from './components/postPanl/postPanl.vue'
import postCre from './components/postcRePanl/postcRePanl.vue'
import userBack from './components/backPanl/backPanl.vue'

//Vue全局引用路由模块
Vue.use(Router);

const router=new Router({
    // mode:'history',
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

//配置路由拦截器（登录验证）
router.beforeEach((to,from,next)=>{
    console.log('from---------------------',from);
    console.log('to-----------------------',to);
    console.log('token--------------------',sessionStorage.getItem('token'));
    if(to.path!='/login'){
    if(sessionStorage.getItem('token')){
       console.log('登录验证通过！');
        next();
    }else{
        console.log('登录验证未通过');
        //未登录跳转到登录页
        next('/')
    }
   }else{
       //执行下一步
       next();
   }
});
export default router