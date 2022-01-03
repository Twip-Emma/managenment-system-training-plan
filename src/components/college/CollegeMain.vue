<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:41:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 15:19:53
 * @Description: file content
-->
<template>
  <div class="out">
    <div class="a"><CollegeMenu /></div>
    <div class="b"><router-view></router-view></div>
  </div>
</template>

<script>
import CollegeMenu from "@/components/college/CollegeMenu";
export default {
  components: { CollegeMenu },
  beforeCreate() {
    let _ = this.$store.state.globalData.user;
    if (_.userId == null) {
      this.$alert("你还未登录，请先登录！", "已阻止的行为", {
        confirmButtonText: "确定",
      });
      this.$router.push({
        name: "Login",
      });
    } else {
      if (_.userType != "老师") {
        this.$alert("你不是老师，你无权查看", "已阻止的行为", {
          confirmButtonText: "确定",
        });
        this.$router.push({
          name: "Login",
        });
      }
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