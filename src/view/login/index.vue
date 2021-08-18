<!--
  首页
-->
<template>
  <div class="login-container">
    <div class="login-warp">
      <div class="login-warp-inner">
        <div class="warp-top">
          <div>登</div>
          <div>录</div>
        </div>
        <el-form :model="loginForm" :rules="rules" class="warp-form">
          <el-form-item prop="phone">
            <el-input
              v-model="loginForm.phone"
              placeholder="请输入手机号"
              maxlength="11"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              maxlength="16"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="btn" @click="onSubmit"
          >立即登录</el-button
        >
        <div class="wrap-forgetpwd">
          <el-button type="text">忘记密码</el-button>
          <el-button type="text">没有密码？点击立即注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      loginForm: {
        phone: "12345678910",
        password: "12345678",
      },
      rules: {
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur",
          },
          {
            min: 11,
            max: 11,
            message: "手机号必须为11位",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 8,
            max: 16,
            message: "密码长度为8~16位",
            trigger: "blur",
          }
        ]
      }
    }
  },
  created() {},
  methods: {
    onSubmit() {
      if (this.loginForm.phone === "12345678910" && this.loginForm.password === "12345678") {
        this.$router.push({ path: "/homePage" });
      }
      return;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/login/login.scss";
</style>