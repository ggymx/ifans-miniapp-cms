// import esPromise from 'es6-promise'
import axios from 'axios'
// import qs from 'qs'

//创建axios的实例
const httpService=axios.create({
    //定义基路径
    baseURL:'https://api-test.ifans.pub/',
    //请求的超时时间
    timeout:2000
});

//request拦截器
httpService.interceptors.request.use({
    config:any => {
        // 根据条件加入token-安全携带
        // if (true) { // 需自定义
        //     // 让每个请求携带token
        //     config.headers['User-Token'] = '';
        // }
        return config;
    }, 
    error:any => {
        // 请求错误处理
        Promise.reject(error);
    }
})

//response拦截器
httpService.interceptors.response.use({
    //响应处理
    response:any => {
        // 统一处理状态
        const res = response.data;
        if (res.statuscode != 1) { // 需自定义
            // 返回异常
            return Promise.reject({
                status: res.statuscode,
                message: res.message
            });
        } else {
            return response.data;
        }
    },
    //异常处理
    error:any=>{
        //出现服务器错误时
        if (error && error.response) {
            //报错打印错误信息，这里应有状态码具体判断
           error.message="出现错误"
        }else{
            //连接服务器失败
            error.message="连接服务器失败"
        }
        return Promise.reject(error);
    }
})


/**
 * 网络请求部分
 */

/**
 * get请求
 * url:请求的url
 * params:请求的参数
 */
export function get(url,params={}){
        //使用axios实例
        return new Promise((resolve, reject) => {
            httpService({
                url: url,
                method: 'get',
                params: params
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
}

/**
 * post请求
 * url:请求的url
 * params:请求的参数
 */
 export function post(url,params={}){
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
 }

 //文件上传...


 export default{
     get,
     post
 }