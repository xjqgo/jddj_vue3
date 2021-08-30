<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      <Back cla="wrapper__hander__back" />
      <div class="wrapper__hander__title">管理收货地址</div>
      <div class="wrapper__hander__add">新增</div>
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
  padding: 0.76rem 0 0.3rem;
  &__hander {
    @include hander;
    display: flex;
    justify-content: space-between;
    &__back {
      color: #b6b6b6;
      font-size: 0.2rem;
      position: relative;
      top: -0.03rem;
    }
  }
  &__address {
    &__title {
      margin: 0 0.18rem 0.12rem;
      font-size: 14px;
      color: #333333;
      line-height: 0.2rem;
    }
  }
}
</style>