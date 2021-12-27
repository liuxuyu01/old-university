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
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    onSubmit() {
      if (
        this.loginForm.phone === "12345678910" &&
        this.loginForm.password === "12345678"
      ) {
        this.$router.push({ path: "/homePage" });
      }
      return;
    },
  },
};
</script>
<style scoped lang="scss">
.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-warp {
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/images/girlfriend.jpg");
    background-repeat: no-repeat;
    background-position: center;
    .login-warp-inner {
      width: 400px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 5px;
      box-shadow: 0 4px 14px 0 rgba(206, 207, 209, 0.5);
      .warp-top {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 40px;
        font-size: 25px;
        font-weight: 500;
      }
      .warp-form,
      .btn {
        width: 80%;
      }
      .wrap-forgetpwd {
        width: 80%;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #0764af;
        div {
          cursor: pointer;
        }
      }
    }
  }
}
</style>