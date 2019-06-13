import Vue from 'vue'
import Vuex from 'vuex'
import Data from './data.js'

Vue.use(Vuex);

//创建初始化状态
const state={
    //放置初始状态
    admin:Data.admin,
    posts:Data.posts,
    users:Data.users
}

//创建改变状态的方法
const mutations={
    //状态变更函数，一般大写
    //添加用户
    ADD_USER(state,data){
     console.log('mutations保存用户----------',data);
      state.users.unshift(data);
    },
    //删除用户
    DEL_USER(state,data){
    console.log('删除用户------id',data.id);

      console.log('剩下的用户------',state.users.filter((item)=>{return item.id!==data.id}))
      state.users=state.users.filter((item)=>{return item.id!==data.id})
    },
    //添加话题/投稿
    ADD_POST(state,data){
        console.log('添加post----------',data)
        state.posts.unshift(data);
        console.log('vuex中的post---------',state.posts)
    },
    DEL_POST(state,data){
        console.log('删除投稿---------',data)
        state.posts=state.posts.filter((item)=>{return item.id!==data.id})
    }
}

//对外的接口，用于触发内部的mutations
const actions={
   // 触发mutations中相应的方法-一般小写
   addUser({commit},data){
       console.log('vuex的action创建用户--------',data)
       commit('ADD_USER',data)
   },
   delUser({commit},data){
       commit('DEL_USER',data);
   },
   addPost({commit},data){
       commit('ADD_POST',data);
   },
   delPost({commit},data){
       commit('DEL_POST',data);
   }
}

//用于外部获取state
const getters={
    count:(state)=>state.count,
    admin:(state)=>state.admin,
    posts:(state)=>state.posts,
    users:(state)=>state.users
}

const store=new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store