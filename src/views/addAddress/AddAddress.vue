<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      <Back />
      <div class="wrapper__hander__title">
        {{ shopId ? "编辑" : "新建" }}收货地址
      </div>
      <div class="wrapper__hander__add" @click="getRequest()">保存</div>
    </div>
    <div class="wrapper__info">
      <div class="wrapper__info__item">
        所在城市：<input v-model="requestData.city" placeholder="如北京" />
      </div>
      <div class="wrapper__info__item">
        小区/大厦/学校：<input
          v-model="requestData.department"
          placeholder="如理工大学国防科技园"
        />
      </div>
      <div class="wrapper__info__item">
        楼号-门牌号：<input
          v-model="requestData.houseNumber"
          placeholder="如A号楼B层"
        />
      </div>
      <div class="wrapper__info__item">
        收货人：<input
          v-model="requestData.name"
          placeholder="请填写收货人的姓名"
        />
      </div>
      <div class="wrapper__info__item zh">
        联系电话：<input
          v-model="requestData.phone"
          placeholder="请填写收货手机号"
        />
      </div>
    </div>
    <Toast v-show="toastData.showToast" :msg="toastData.msg" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { post, get } from "../../util/request";
import Back from "../../components/back.vue";
import { useRouter, useRoute } from "vue-router";
import Toast, { showToastEffect } from "../../components/Toast.vue";
//
const getAddressEffect = () => {
  const { toastData, showToast } = showToastEffect();
  const requestData = ref({
    city: "",
    department: "",
    houseNumber: "",
    name: "",
    phone: "",
  });
  const router = useRouter();
  const route = useRoute();
  const shopId = parseInt(route.params.id);
  const getRequest = async (loadOne) => {
    try {
      let result;
      if (loadOne) result = await get(`/api/user/address/${shopId}`);
      else result = await post(`/api/user/address${shopId?'/'+shopId:''}`, { data: requestData.value });
      console.log("返回结果address", result);
      if (result?.errno === 0 && result?.data) {
        if (loadOne) {
          requestData.value = result.data;
        } else {
          if (shopId) showToast("编辑成功");
          else showToast("添加成功");
          setTimeout(() => {
            router.push({ name: "UserAddress" });
          }, 2000);
        }
      }
    } catch (e) {
      alert("请求失败:" + e);
    }
  };
  if (shopId) getRequest(true);

  return { requestData, getRequest, shopId, toastData };
};

export default {
  components: { Back, Toast },
  setup() {
    const { requestData, getRequest, shopId, toastData } = getAddressEffect();

    return { requestData, getRequest, shopId, toastData };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper {
  @include wrapper;
  bottom: 0;
  padding: 0.65rem 0 0.3rem;
  &__hander {
    @include hander;
  }
  &__info {
    margin-top: 0.12rem;
    padding: 0 0.18rem;
    background: $bgColor-white;
    &__item {
      line-height: 0.2rem;
      font-size: 0.14rem;
      padding: 0.12rem 0;
      color: $mediun-fontcolor;
      border-bottom: 1px solid $content-bgColor;
      white-space: nowrap;
      input {
        width: 66%;
        border: none;
        outline: none;
      }
      input::placeholder {
        color: $light-fontcolor;
      }
    }
    &__item:last-child {
      border: none;
    }
  }
}
</style>