import axios from 'axios'
import store from '../store/index';
import { Message } from 'element-ui'
import qs from "qs"

/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'http://2wnwjc.natappfree.cc';
// axios.defaults.baseURL='http://192.168.43.203:8080'
// 请求超时时间
axios.defaults.timeout = 10000;
// const token = store.state.token;
// post请求头
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true
// axios.defaults.headers.common['token'] = token;
// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        let token = window.localStorage.getItem("token")
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        // Do something before request is sent
        // console.log(window.localStorage.getItem("token"))
        if (token) {
            console.log('token',token)
            config.headers['ACCESS_TOKEN'] = token;
            return config;
            //这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
            // config.headers['accessToken'] = Token;
        }
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(

    response => {
        // console.log(12312312)
        // console.log(response)
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况    
    error => {
        // console.log(error, 123123121231321231321)
        return Promise.reject(error);

    }
);
// /**
//  * get方法，对应get请求 
//  * @param {String} url [请求的url地址] 
//  * @param {Object} params [请求时携带的参数] 
//  */
// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//              params
//         })
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     });
// }
// /** 
//  * post方法，对应post请求 
//  * @param {String} url [请求的url地址] 
//  * @param {Object} params [请求时携带的参数] 
//  */
// export function post(url, data) {
//     return new Promise((resolve, reject) => {
//         // console.log( JSON.stringify(params),111)
//         // console.log(params,2222)
//         axios.post(url, data).then(res => {
//             resolve(res.data);
//         }).catch(err => {
//             reject(err.data)
//         })
//     });
// }

// /**
//  * put方法，对应put请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function put(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.put(url, params)
//             .then(res => {
//                 resolve(res.data);
//                 // Loading.service(true).close();
//                 //  Message({message: '请求成功', type: 'success'});
//             })
//             .catch(err => {
//                 reject(err.data)
//                 // Loading.service(true).close();
//                 Message({ message: '加载失败', type: 'error' });
//             })
//     });
// }


// /**
//  * delete
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function deletefn(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.delete(url, JSON.stringify(params))
//             .then(res => {
//                 resolve(res.data);
//                 // Loading.service(true).close();
//                 //  Message({message: '请求成功', type: 'success'});
//             })
//             .catch(err => {
//                 reject(err.data)
//                 // Loading.service(true).close();
//                 Message({ message: '加载失败', type: 'error' });
//             })
//     });
// }