<template>
    <div class="wrapper">
      <Search :placeholder="$route.query.key" />
    <div class="shop">
      <Shopinfo :item="item" :product="true" />
      <Shopinfo :item="item" :product="true" />
    </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { get } from "../../util/request";
import Shopinfo from "../../components/Shopinfo.vue";
import Search from "../../components/Search.vue";
import { useStore } from "vuex";
// 取店铺信息
const useShopInfoEffect = () => {
  const state = useStore();
  let item = ref({});
  const getShop = async () => {
    const result = await get(`/api/shop/1`);
    console.log("返回结果", result);
    if (result?.errno === 0 && result?.data) {
      item.value = result.data;
      state.commit("setShopName", {
        shopName: result.data.name,
      });
    }
  };
  getShop();
  
  return {  item };
};

export default {
  components: { Shopinfo,Search },
  setup() {
    const {  item } = useShopInfoEffect();
    return { item };
  },
    
}
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.shop {
  padding-top: .08rem;
  margin-left: 0.18rem;
}
</style>