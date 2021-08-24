<template>
  <div class="wrapper">
    <div class="wrapper__hander">我的全部购物车（2）</div>
    <Shop v-for="item in cartList" :key="item" :item="item" />
    <Docker />
  </div>
</template>

<script>
import Shop from "./Shop.vue";
import Docker from "../home/Docker.vue";
import { useCartEffect } from "../shop/useCartEffect";

export default {
  components: { Shop, Docker },
  setup() {
    const { cartList } = useCartEffect();
    return { cartList };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
    padding: 0.68rem 0 .5rem;
  overflow-y: auto;
  background: #f8f8f8;
  &__hander {
    font-size: 0.16rem;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 0.11rem;
    padding-top: 0.31rem;
    background: #fff;
    z-index: 1;
  }
  &__content {
    overflow-y: scroll;
  }
}
</style>