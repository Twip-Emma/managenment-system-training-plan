<!--
 * @Author: 七画一只妖
 * @Date: 2021-12-27 17:19:24
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-01-03 10:51:23
 * @Description: file content
-->
<template>
  <el-container class="out">
    <div class="a">
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <h1>登录/注册</h1>
          <input
            type="text"
            class="e"
            placeholder="user_name"
            v-model="userInfo.userName"
          />
          <input
            type="text"
            class="e"
            placeholder="user_id"
            v-model="userInfo.userCard"
          />
          <input
            type="password"
            class="e"
            placeholder="user_password"
            v-model="userInfo.userPass"
          />
          <a @click="goToPage('Login')" href="#" class="f">返回注册界面</a>
          <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
          <el-button
            class="login"
            type="primary"
            @click="userRegister(userInfo)"
            >注册</el-button
          >
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      userInfo: {
        userName: "",
        userCard: "",
        userPass: "",
        userSex: "未设置",
        userStage: 1,
        userState: "在校",
        userType: "学生",
      },
    };
  },
  methods: {
    goToPage(target) {
      this.$router.push({
        name: target,
      });
    },
    // ...mapActions("userLogin",{userRegister:"userRegister"})
    // userLogin(){
    //     this.$store.userLogin.dispatch("userRegister")
    // }
    userRegister(userInfo) {
      let res = this.$store.dispatch("userLogin/userRegister", userInfo)
      console.log(res)
      if(res.code == 10000){
        this.$alert('恭喜你正式成为本站一员，正在前往首页', '注册成功！', {
          confirmButtonText: '确定',
        });
        this.$router.push({
          name:"HomePage"
        })
      }else{
        this.$alert('这个账号被用过了，请重试', '注册失败！', {
          confirmButtonText: '确定',
        });
      }
    },
  },
};
</script>

<style>
.out {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4%;
}

.a {
  /* position: relative; */
  /* top: 50px; */
  /* margin-trim: 60px; */
  /* left: 20%; */
  /* width: 100%; */
  /* height: 80%; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
}

.b {
  width: 800px;
  height: 550px;
  /* background-image: url("https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0002/e0002s5_figure.png"); */
  background-image: url("https://sdorica.yuewuzhijian.top/sdorica-figure-light/b0001/b0001s5_figure.webp");
  /* https://sdorica.yuewuzhijian.top/sdorica-figure-light/b0001/b0001s5_figure.webp */
  /* 图片自适应 */
  background-size: cover;
}

.c {
  width: 300px;
  height: 550px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.d {
  width: 250px;
  height: 500px;
}

.d h1 {
  font: 900 30px "";
}

.e {
  width: 230px;
  margin: 20px 0;
  outline: none;
  border: 0;
  padding: 10px;
  border-bottom: 3px solid rgb(80, 80, 170);
  font: 900 16px "";
}

.f {
  float: right;
  margin: 10px 0;
}

.g {
  position: absolute;
  margin: 20px;
  bottom: 40px;
  display: block;
  width: 200px;
  height: 60px;
  font: 900 30px "";
  text-decoration: none;
  line-height: 50px;
  border-radius: 30px;
  background-image: linear-gradient(to left, #9c88ff, #3cadeb);
  text-align: center;
}

.login {
  width: 100%;
}
</style>