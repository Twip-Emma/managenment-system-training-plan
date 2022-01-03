/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:42:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 08:26:27
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//登录界面
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'


const routes = [
    {
        name:"Login",
        path: '/',
        component: Login,
    },
    {
        name:"Register",
        path: '/register',
        component: Register
    }
]


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
