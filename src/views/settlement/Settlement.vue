<template>
  <div class="wrapper">
    <Top />
    <Shop v-for="item in cartList" :key="item" :item="item" />
    <Bottom-order />
  </div>
</template>

<script>
import Shop from "../cartList/Shop.vue";
import { useCartEffect } from "../shop/useCartEffect";
import { useRoute } from "vue-router";
import Top from "./topArea.vue";
import BottomOrder from "./bottomOrder.vue";

export default {
  components: { Shop, Top,BottomOrder },
  setup() {
    let { cartList } = useCartEffect();
    const route = useRoute();
    cartList = { info: cartList[route.params.id] };

    return { cartList };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #f8f8f8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding-top: 1.9rem;
  padding-bottom: 0.3rem;
  overflow-y: auto;
}
</style>