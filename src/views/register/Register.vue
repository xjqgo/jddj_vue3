<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="data.username"
        placeholder="请输入用户名"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="data.password"
        autocomplete="new-password"
        placeholder="请输入密码"
        type="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="data.passwords"
        autocomplete="new-password"
        placeholder="确认密码"
        type="password"
      />
    </div>
    <button @click="handledRegister">注册</button>
    <div class="wrapper__tags">
      <span @click="handledToLogin">已有账号去注册</span>
    </div>
    <Toast v-show="toastData.showToast" :msg="toastData.msg" />
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../util/request";
import Toast, { showToastEffect } from "../../components/Toast.vue";

// 处理注册相关逻辑
const useRegisterEffect = (showToast) => {
  const data = reactive({
    username: "",
    password: "",
    passwords: "",
  });

  const handledRegister = async () => {
    if (data.username == "" || data.password == "")
      return showToast("用户名或密码不能为空");
    if (data.password != data.passwords) return showToast("密码不一致");
    try {
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      console.log("返回结果", result);
      if (result.data.errno === 0) {
        showToast("注册成功");
      } else {
        showToast("注册失败");
        showToast("注册失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  return { data, handledRegister };
};

// 处理登陆链接跳转
const useLoginEffect = () => {
  const router = useRouter();
  const handledToLogin = () => {
    router.push({ name: "Login" });
  };
  return { handledToLogin };
};

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { toastData, showToast } = showToastEffect();
    const { data, handledRegister } = useRegisterEffect(showToast);
    const { handledToLogin } = useLoginEffect();
    return {
      handledRegister,
      handledToLogin,
      data,
      toastData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  overflow: visible;
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    height: 0.48rem;
    margin-bottom: 0.16rem;
    padding: 0 0.16rem;
    font-size: 0.16rem;
    letter-spacing: 0;
    &__content {
      // box-sizing: border-box;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      line-height: 0.48rem;
      padding: 0;
      color: $content-loginFontColor;
    }
    ::placeholder {
      color: $content-loginFontColor;
    }
  }
  button {
    width: 100%;
    height: 0.48rem;
    margin: 0.16rem 0;
    padding: 0;
    background: #0091ff;
    color: #fff;
    font-size: 0.16rem;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 4px;
    border: none;
  }
  &__tags {
    text-align: center;
    color: $content-loginFontColor;
    font-size: 00.16rem;
    .jiange {
      margin: 0 0.12rem;
    }
  }
}
</style>
