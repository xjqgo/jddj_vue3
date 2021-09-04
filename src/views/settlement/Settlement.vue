<template>
  <div class="wrapper">
    <Top />
    <Shop v-for="item in { cartShop }" :key="item" :item="item" type="order" />
    <Bottom-order />
  </div>
</template>

<script>
import Shop from "../cartList/Shop.vue";
import Top from "./topArea.vue";
import BottomOrder from "./bottomOrder.vue";
import { cartEffect } from "../../effects/cartEffect";


export default {
  components: { Shop, Top, BottomOrder },
  setup() {
    const { cartShop } = cartEffect();

    return {cartShop}
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
.wrapper {
  background: $bgColor;
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