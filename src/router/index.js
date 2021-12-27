/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:42:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-12-27 16:05:58
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
// const Welcome = () => import(/* webpackChunkName: "Welcome" */ '@/views/Welcome')
// 普通用户相关组件
// import HomePage from '@/views/HomePage'
// import Essay from '@/views/Essay'
// import Message from '@/views/Message'
// import Project from '@/views/Project'
// import About from '@/views/About'
// import BlogInfo from '@/components/index/BlogInfo'
// import Login from '@/components/login/Login'

// 管理员相关组件
// import Admin from '@/views/Admin'
// import UserFrom from '@/components/admin/UserFrom'

const routes = []


// 解决：重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {  
    return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
    routes
})
Vue.use(VueRouter)
export default router
