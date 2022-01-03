/*
 * @Author: 七画一只妖
 * @Date: 2022-01-03 09:13:51
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 10:50:41
 * @Description: file content
 */
import axios from "axios"

export default {
    namespaced: true,
    actions: {
        // 用户登录
        userLogin(_, userInfo) {
            axios.post("api/login/checkUser", userInfo).then(
                response => {
                    return response.data
                },
                error => {
                    console.log(error.message)
                }
            )
        },

        // 用户注册
        userRegister(_, userInfo) {
            axios.post("api/register/newUser", userInfo).then(
                response => {
                    return response.data
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    },
    mutations: {
        _changeLoginState(state, value){
            state.loginState = value
        }
    },
    state: {
        loginState:false
    }
}