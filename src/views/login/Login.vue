<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input class="wrapper__input__content" v-model="data.username" placeholder="请输入用户名" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" v-model="data.password" placeholder="请输入密码" type="password" />
    </div>
    <button @click="handledLogin">登陆</button>
    <div class="wrapper__tags"><span @click="handledRegister">注册用户</span><span class="jiange">|</span><span>忘记密码</span></div>
  <Toast v-show="toastData.showToast" :msg="toastData.msg" />
  </div>
</template>

<script>
import { reactive } from 'vue'
// import * as info from 'vue-router'
import { useRouter } from 'vue-router'
import { post } from '../../util/request'
import Toast from '../../components/Toast.vue'

const showToastEffect=()=>{
  const toastData = reactive({
    showToast:false,
    msg:'11'
  })
  const showToast=(msg)=>{      
    toastData.showToast=true
    toastData.msg=msg
    setTimeout(() => {
      toastData.showToast=false
      toastData.msg='1'
    }, 2000);
  }

  return {toastData,showToast}
}

export default {
  name: 'Login',
  components:{Toast},
  setup () {
    const router = useRouter()
    const {toastData,showToast}=showToastEffect()
    const data = reactive({
      username: '',
      password: '',
    })

    const handledLogin = async () => {
      console.log(post)
      try {
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })
        console.log('返回结果', result)
        if (result.data.errno === 0) {
          showToast('登陆成功')
        } else {
          showToast('登陆失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }

    const handledRegister = () => {
      router.push({ name: 'Register' })
    }

    return {
      handledLogin,
      handledRegister,
      data,
      toastData
    }
  }
}
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
    height: .48rem;
    margin-bottom: 0.16rem;
    padding: 0 0.16rem;
    font-size: 0.16rem;
    letter-spacing: 0;
    &__content{
        // box-sizing: border-box;
        width: 100%;
        border: none;
        outline: none;
        background: none;
        line-height: .48rem;
        padding: 0;
        color: $content-loginFontColor;
    }
    ::placeholder{
        color: $content-loginFontColor;
    }
  }
  button{
    width: 100%;
    height: 0.48rem;
    margin: 0.16rem 0;
    padding: 0;
    background: #0091FF;
    color: #fff;
    font-size: 0.16rem;
    box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
    border-radius: 4px;
    border: none;
  }
  &__tags{
    text-align: center;
    color: $content-loginFontColor;
    font-size: 00.16rem;
    .jiange{
      margin: 0 0.12rem;
    }
  }
}
</style>
