<!--
 * @Author: 七画一只妖
 * @Date: 2022-01-03 08:59:28
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 15:10:08
 * @Description: file content
-->
<template>
<div>这是欢迎界面</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate(){
      let _ = this.$store.state.globalData.user
      if(_.userId == null){
          this.$alert("你还未登录，请先登录！", "已阻止的行为", {
            confirmButtonText: "确定",
          });
          this.$router.push({
              name:"Login"
          })
      }
  }
};
</script>

<style>
</style>