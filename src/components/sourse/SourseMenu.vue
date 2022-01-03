<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:42:13
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 14:48:40
 * @Description: file content
-->
<template>
  <div>
    <el-row class="tac">
      <el-col :span="100"
        ><div class="welcome"><h3>欢迎您，管理员</h3></div>

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>用户面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">普通用户管理</template>
              <el-menu-item index="1-1" @click="adminJumpTo('SourseFrom')"
                >账号密码</el-menu-item
              >
              <el-menu-item index="1-2" @click="adminJumpTo('SourseFrom')"
                >标识设置</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group title="用户触发事件">
              <el-menu-item index="1-3" @click="adminJumpTo('SourseFrom')"
                >事件总览</el-menu-item
              >
              <el-menu-item index="1-4" @click="adminJumpTo('SourseFrom')"
                >响应标识</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 文章管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>文章面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">博客管理</template>
              <el-menu-item index="2-1" @click="adminJumpTo('SourseFrom')"
                >博客列表</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 留言管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>留言面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">普通用户管理</template>
              <el-menu-item index="3-1" @click="adminJumpTo('SourseFrom')"
                >账号密码</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 事件管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>事件监听</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户动作</template>
              <el-menu-item index="4-1" @click="adminJumpTo('SourseFrom')"
                >请求监听</el-menu-item
              >
              <el-menu-item index="4-2" @click="adminJumpTo('SourseFrom')"
                >登录登出</el-menu-item
              >
              <el-menu-item index="4-3" @click="adminJumpTo('SourseFrom')"
                >昵称变更</el-menu-item
              >
              <el-menu-item index="4-4" @click="adminJumpTo('SourseFrom')"
                >头像变更</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击选项卡进行切换页面
    adminJumpTo(target) {
      this.$router.push({
        name: target,
        query: {},
      });
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 800px;
}

.welcome {
  height: 40px;
  text-align: center;
}
</style>