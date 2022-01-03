<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:41:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 15:12:28
 * @Description: file content
-->
<template>
  <div class="out">
    <div class="a"><SourseMenu /></div>
    <div class="b"><router-view></router-view></div>
  </div>
</template>

<script>
import SourseMenu from "@/components/sourse/SourseMenu";
export default {
  components: { SourseMenu },
  beforeCreate() {
    let _ = this.$store.state.globalData.user;
    if (_.userId == null) {
      this.$alert("你还未登录，请先登录！", "已阻止的行为", {
        confirmButtonText: "确定",
      });
      this.$router.push({
        name: "Login",
      });
    }
  },
};
</script>

<style scoped>
.out {
  /* border-color: red; */
  display: flex;
  /* justify-content: center; */
}

.a {
  width: 25%;
}

.b {
  width: 75%;
}
</style>