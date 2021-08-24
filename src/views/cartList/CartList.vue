<template>
  <div class="wrapper">
    <div class="wrapper__hander">我的全部购物车<span v-if="total>1">（{{total}}）</span></div>
    <Shop v-for="item in cartList" :key="item" :item="item" :total="total" />
    <Docker />
  </div>
</template>

<script>
import Shop from "./Shop.vue";
import Docker from "../home/Docker.vue";
import { useCartEffect } from "../shop/useCartEffect";
import { computed } from '@vue/runtime-core';

export default {
  components: { Shop, Docker },
  setup() {
    const { cartList } = useCartEffect();
    const total = computed(() => {
      let result=0
      for (const key in cartList) {
        if (Object.hasOwnProperty.call(cartList, key)) {
          const element = cartList[key];
          result+=Object.keys(element.productList).length
        }
      }
      return result
    });
    return { cartList,total };
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