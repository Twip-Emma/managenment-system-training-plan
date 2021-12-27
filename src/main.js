/*
 * @Author: 七画一只妖
 * @Date: 2021-12-27 14:59:06
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-12-27 16:31:58
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
// import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/global.css"
import VueRouter from "vue-router"

import router from "./router"

import store from "./store"

Vue.use(ElementUI);
Vue.use(VueRouter)

Vue.config.productionTip = false


// const blog = axios.create({ // 博客后台api地址
//   baseURL: 'http://hikari.top:8090'
// })

// Vue.prototype.$blog = blog

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')