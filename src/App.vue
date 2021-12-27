<!--
 * @Author: 七画一只妖
 * @Date: 2021-12-27 14:59:06
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-12-27 16:26:02
 * @Description: file content
-->
<template>
  <div class="id">
    <el-container>
      <el-header><NavBar /></el-header>
      <router-view class="app2"></router-view>
      <el-footer class="el-footer"><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from '@/components/changeless/Footer'
import NavBar from '@/components/changeless/NavBar'

export default {
  name: "index",
  components:{
      Footer,
      NavBar,
  },
  data() {
    return {};
  },
};
</script>

<style>
.app {
  width: 100%;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
}

.app2 {
  width: 80%;
  margin: auto;
}

.el-header {
  background-color: #545c64;
}
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 0%;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
