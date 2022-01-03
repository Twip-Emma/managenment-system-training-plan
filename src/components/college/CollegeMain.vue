<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:41:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 14:35:15
 * @Description: file content
-->
<template>
  <div class="out">
    <div class="a"><AdminMenu /></div>
    <div class="b"><router-view></router-view></div>
  </div>
</template>

<script>
import AdminMenu from "@/components/college/CollegeMenu";
export default {
  components: { AdminMenu },
};
</script>

<style scoped>
.out {
  /* border-color: red; */
  display: flex;
  /* justify-content: center; */
}

.a{
    width: 25%;
}

.b{
    width: 75%;
}
</style>