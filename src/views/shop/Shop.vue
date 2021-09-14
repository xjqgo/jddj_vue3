<template>
  <div class="wrapper">
    <Search placeholder="请输入商品名称搜索" />
    <div class="shop">
      <Shopinfo :item="item" :hidegap="true" />
    </div>
    <Content />
    <Cart />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { get } from "../../util/request";
import Shopinfo from "../../components/Shopinfo.vue";
import Search from "../../components/Search.vue";
import Content from "./Content.vue";
import Cart from "./Cart.vue";
import { useStore } from "vuex";

// 取店铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  const state = useStore();
  let item = ref({});
  const getShop = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    console.log("返回结果", result);
    if (result?.errno === 0 && result?.data) {
      item.value = result.data;
      state.commit("setShopName", {
        shopId: route.params.id,
        shopName: result.data.name,
      });
    }
  };
  getShop();
  
  return {  item };
};

export default {
  name: "Shop",
  components: { Shopinfo, Content, Cart, Search },
  setup() {
    const {  item } = useShopInfoEffect();
    return { item };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.shop {
  margin-left: 0.18rem;
}
</style>