<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      我的全部购物车<span v-if="total">（{{ total }}）</span>
    </div>
    <div class="cart-null" v-if="!total">购物车一无所有，快去点点吧</div>
    <Shop v-for="item in cartList" :key="item" :item="item" />
    <Docker :currentIndex="1" />
  </div>
</template>

<script>
import Shop from "./Shop.vue";
import Docker from "../../components/Docker.vue";
import { cartEffect } from "../../effects/cartEffect";
import { computed } from "@vue/runtime-core";

export default {
  components: { Shop, Docker },
  setup() {
    const { cartList } = cartEffect();
    const total = computed(() => {
      let result = 0;
      for (const key in cartList) {
        if (Object.hasOwnProperty.call(cartList, key)) {
          const element = cartList[key];
          result += Object.keys(element.productList).length;
        }
      }
      return result;
    });
    return { cartList, total };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper {
  @include wrapper;
  .cart-null {
    font-size: 0.18rem;
    color: $mediun-fontcolor;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  &__hander {
    font-size: 0.16rem;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 0.11rem;
    padding-top: 0.31rem;
    background: $bgColor-white;
    z-index: 1;
  }
  &__content {
    overflow-y: scroll;
  }
}
</style>