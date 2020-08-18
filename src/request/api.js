import http from './http.js'
import axios from 'axios'
import store from '../store/index'

// 登陆
export function login_(data) {
    return axios({
        url:'/admin/login',
        method:'post',
        data
        
    })
}
// 获取验证码
export function VerifyCode_(data){
    return axios({
        url:'/verify',
        method:'get',
        responseType: "arraybuffer",
        // xhrFields:{
        //     withCredentials:true
        // }
    })
}
// 获取后台导航
export function Nav(){
    return axios({
        // url:'/backstage/nav',
        url:'/data',
        method:'get',
    })
}
// 退出登陆
export function logout(){
    return axios({
        url:'/admin/logout',
        method:'get'
    })
}
// 内容/文章管理/文章评论：获得信息
export function articleList(){
    return axios({
        url:'/articleList',
        method:'get'
    })
}
// 内容/文章管理/文章分类：获得表格信息
export function articleType(){
    return axios({
        url:'/articleType',
        method:'get'
    })
}
// 内容/文章管理/文章列表：获得表格信息
export function articlelist(){
    return axios({
        url:'/articleType',
        method:'get'
    })
}