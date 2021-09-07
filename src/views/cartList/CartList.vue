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
import Shop from "../../components/ShopProductList.vue";
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
    @include center-transform;
  }
  &__hander {
  @include hander;
  }
  &__content {
    overflow-y: scroll;
  }
}
</style>