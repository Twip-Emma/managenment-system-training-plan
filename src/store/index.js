/*
 * @Author: 七画一只妖
 * @Date: 2021-11-13 13:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 09:27:08
 * @Description: file content
 */

import Vue from "vue"
import Vuex from "vuex"

import globalData from '@/store/global'
import userLogin from '@/store/userLogin'


Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        globalData: globalData,
        userLogin: userLogin
    }
})