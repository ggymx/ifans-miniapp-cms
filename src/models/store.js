import Vue from 'vue'
import Vuex from 'vuex'
import Data from './data.js'

Vue.use(Vuex);

//创建初始化状态
const state={
    //放置初始状态
    count:1,
    admin:Data.admin
}

//创建改变状态的方法
const mutations={
    //状态变更函数，一般大写
    ADD(state,n){
      state.count+n;
    }
}

//对外的接口，用于触发内部的mutations
const actions={
   // 触发mutations中相应的方法-一般小写
   add({commit},data){
       commit('ADD',data)
   }
}

//用于外部获取state
const getters={
    count:(state)=>state.count,
    admin:(state)=>state.admin
}

const store=new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store