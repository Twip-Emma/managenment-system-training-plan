/*
 * @Author: 七画一只妖
 * @Date: 2021-11-20 23:22:54
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 11:31:34
 * @Description: file content
 */


// 数据初始化
export default {
  namespaced: true,
  actions: {
    test() {
      console.log("在vuex里面，成功了")
    },
    changeUser(context, value){
      context.commit("_changeUser",value)
    }
  },
  mutations: {
    _changeUser(state, value) {
      state.user = value
    }
  },
  state: {
    user: {

    }
  },
  getters: {}
}