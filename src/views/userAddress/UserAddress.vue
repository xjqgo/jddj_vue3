<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      <Back />
      <div class="wrapper__hander__title">管理收货地址</div>
      <div class="wrapper__hander__add">
        <router-link to="/addAddress">新增</router-link>
      </div>
    </div>
    <div class="wrapper__address">
      <div class="wrapper__address__title">我的收货地址</div>
      <Info v-for="item in data" :key="item" :item="item" />
    </div>
  </div>
</template>

<script>
import Info from "./infoList.vue";
import { ref } from "@vue/reactivity";
import { get } from "../../util/request";
import Back from "../../components/back.vue";
//
const getAddressEffect = () => {
  const data = ref([]);
  const getRquest = async () => {
    try {
      const result = await get(`/api/user/address`);
      console.log("返回结果address", result);
      if (result?.errno === 0 && result?.data) {
        data.value = result.data;
      }
    } catch (e) {
      alert("请求失败:" + e);
    }
  };
  getRquest();
  return { data };
};

export default {
  components: { Info, Back },
  setup() {
    const { data } = getAddressEffect();

    return { data };
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
  &__address {
    &__title {
      margin: .16rem 0.18rem 0.12rem;
      font-size: 14px;
      color: $content-fontcolor;
      line-height: 0.2rem;
    }
  }
}
</style>