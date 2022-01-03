<!--
 * @Author: 七画一只妖
 * @Date: 2021-12-27 16:18:44
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 09:10:12
 * @Description: file content
-->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <el-menu
      class="el-menu-demo-p"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="el-menu-item_p" index="1" @click="goToPage('HomePage')"
        >首页</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="2" @click="goToPage('Essay')"
        >学院</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="3" @click="goToPage('Message')"
        >选课</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="4" @click="goToPage('About')"
        >个人</el-menu-item
      >
      <el-menu-item class="el-menu-item_p-input">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="userInput"
        >
        </el-input>
      </el-menu-item>
      <!-- <Logined /> -->
    </el-menu>
  </div>
</template>

<script>
// import {mapActions} from "vuex"
// import Logined from "@/components/changeless/Logined";
export default {
  name: "NavBar",
  components: { },
  data() {
    return {
      administrator: true,
      activeIndex: "1",
      activeIndex2: "1",
      userInput: "",
    };
  },
  methods: {
    goToPage(target){
      this.$router.push({
        name:target
      })
    },
    handleSelect(){
      
    }
  }
};
</script>

<style scoped>
.menu-out {
  width: 70%;
}
.el-menu-demo-p {
  display: flex;
  justify-content: space-around;
}
.el-menu-item_p {
  text-align: center;
  width: 200px;
}
.el-menu-item_p-input {
  width: 400px;
}
</style>