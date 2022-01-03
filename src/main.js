/*
 * @Author: 七画一只妖
 * @Date: 2021-12-27 14:59:06
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 08:12:58
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/global.css"
import VueRouter from "vue-router"

import router from "./router"

import store from "./store"


//使用elementui
Vue.use(ElementUI);

//引入路由
Vue.use(VueRouter)

// 生产提示：关闭
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')