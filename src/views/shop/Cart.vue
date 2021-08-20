<template>
  <div class="mask" v-show="showCart" @click="showCart = !showCart"></div>
  <div class="cart">
    <div class="cart__products" v-show="showCart">
      <div class="cart__allop">
        <div
          class="cart__all-check"
          @click="changeCartItem(shopId, { _id: 'allCheck' }, allCheck)"
        >
          <span class="iconfont">{{ allCheck ? "&#xe70f;" : "&#xe667;" }}</span>
          <span>全选</span>
        </div>
        <div
          class="cart__clear"
          @click="()=>{changeCartItem(shopId, { _id: 'clear' }, -1);showCart = !showCart;}"
        >
          清空购物车
        </div>
      </div>
      <div class="item" v-for="item in contentLiat" :key="item._id">
        <span
          class="cart__products__check iconfont"
          @click="item.check = !item.check"
          >{{ item.check === true ? "&#xe70f;" : "&#xe667;" }}</span
        >
        <img class="cart__products__img" :src="item.imgUrl" />
        <div class="cart__products__info">
          <h4 class="title">{{ item.name }}</h4>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">{{ item.price }}</span>
              <span class="yuanjia">￥{{ item.oldPrice }}</span>
            </div>
            <div class="number">
              <span>
                <span class="minus" @click="changeCartItem(shopId, item, -1)"
                  >-</span
                >
                <span class="jianshu">{{ item.count }}</span>
              </span>
              <span
                class="changeCartItem"
                @click="changeCartItem(shopId, item, 1)"
                >+</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算 -->
    <div class="cart__settlement" @click="showCart = !showCart">
      <img
        class="cart__img"
        src="http://www.dell-lee.com/imgs/vue3/basket.png"
      />
      <div class="cart__icon">{{ total }}</div>
      <span v-show="total">
        <span class="cart__text">合计：</span>
        <span class="cart__price">￥{{ price }}</span>
      </span>
      <span class="cart__text" v-show="!total">购物车是空的</span>
    </div>
    <div class="cart__jiesuan">去结算</div>
  </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
import { useCartEffect } from "./useCartEffect";

// 商品列表相关
// const shopListEffect = () => {
//   const contentLiat = computed(() => {

//   })

//   return { contentLiat };
// };
const useCartEffects = () => {
  const route = useRoute();
  const store = useStore();
  const shopId = route.params.id;
  const { cartList } = toRefs(store.state);
  const { changeCartItem } = useCartEffect();

  const total = computed(() => {
    let count = 0;
    const productList = cartList.value[shopId];
    for (const key in productList) {
      if (Object.hasOwnProperty.call(productList, key)) {
        count += productList[key].count;
      }
    }
    return count;
  });

  const price = computed(() => {
    let count = 0;
    const productList = cartList.value[shopId];
    for (const key in productList) {
      if (Object.hasOwnProperty.call(productList, key)) {
        if (productList[key].check)
          count += productList[key].count * productList[key].price;
      }
    }
    return count.toFixed(2);
  });

  const contentLiat = computed(() => {
    return cartList.value[shopId] || {};
  });

  const allCheck = computed(() => {
    let curren = true;
    const list = cartList.value[shopId];
    for (const key in list) {
      if (Object.hasOwnProperty.call(list, key)) {
        const element = list[key];
        if (!element.check) {
          curren = false;
          return curren;
        }
      }
    }
    return curren;
  });

  return { total, price, contentLiat, changeCartItem, shopId, allCheck };
};

export default {
  name: "Cart",
  setup() {
    const showCart = ref(true);
    const { total, price, shopId, contentLiat, changeCartItem, allCheck } =
      useCartEffects();
    return {
      total,
      price,
      contentLiat,
      changeCartItem,
      shopId,
      allCheck,
      showCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
@import "./style/mixins.scss";

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($blank-fontcolor, 0.5);
}

.cart {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  background: $textColor-white;
  &__products {
    min-height: 1rem;
    width: 100%;
    background: $bgColor-white;
    position: absolute;
    bottom: 0.5rem;
    .item {
      display: flex;
    }
    &__check {
      font-size: 0.19rem;
      color: $bgColor-lightBlue;
      margin: 0.16rem 0 0 0.18rem;
    }
    &__img {
      width: 0.48rem;
      height: 0.48rem;
      margin: 0 0.16rem 0.12rem 0.16rem;
    }
    &__info {
      flex: 1;
      overflow: hidden;
      border-bottom: 1px solid $content-bgColor;
      margin-right: 0.18rem;
      margin-bottom: 0.12rem;
      .title {
        margin: 0;
        font-size: 00.14rem;
        @include ellipsis;
      }
      .sales {
        margin: 0.06rem 0;
        line-height: 0.16rem;
        font-size: 0.12rem;
      }
      .jgjs {
        display: flex;
        justify-content: space-between; /* 横向中间自动空间 */
        // align-content: space-between;  /* 竖向中间自动空间 */
        margin-top: 00.06rem;
        .number {
          position: relative;
          bottom: 0.18rem;
        }
        .jianshu {
          margin: 0 0.1rem;
        }
        .minus,
        .changeCartItem {
          display: inline-block;
          font-size: 0.2rem;
          text-align: center;
          line-height: 0.16rem;
          height: 0.2rem;
          width: 0.2rem;
          border-radius: 50%;
          border: 1px solid $blank-fontcolor;
        }
        .changeCartItem {
          color: $textColor-white;
          background: $bgColor-lightBlue;
          border: 1px solid $bgColor-lightBlue;
        }
      }
      .price {
        color: $textColor-lightRed;
        span {
          display: inline-block;
        }
        .xianjia {
          line-height: 0.2rem;
          font-size: 0.14rem;
        }
        .yuanjia {
          color: $light-fontcolor;
          text-decoration: line-through;
          margin-left: 00.06rem;
          line-height: 0.2rem;
          font-size: 0.12rem;
          position: relative;
          top: -0.01rem;
        }
      }
    }
  }
  .cart__img {
    width: 0.28rem;
    height: 0.26rem;
    margin: 0 0.32rem 0 0.24rem;
  }
  &__icon {
    position: absolute;
    min-width: 0.2rem;
    height: 0.2rem;
    padding: 0 0.04rem;
    border-radius: 50%;
    background: $textColor-lightRed;
    top: 0.02rem;
    left: 0.45rem;
    color: $textColor-white;
    font-size: 0.16rem;
    text-align: center;
    transform: scale(0.5);
    transform-origin: left center;
  }
  &__text {
    position: relative;
    top: -0.07rem;
  }
  &__price {
    font-size: 0.18rem;
    color: $textColor-lightRed;
    position: relative;
    top: -0.05rem;
  }
  &__jiesuan {
    width: 0.98rem;
    line-height: 0.49rem;
    background: rgba($color: $bgColor-lightBlue, $alpha: 0.7);
    color: $textColor-white;
    text-align: center;
    font-size: 0.14rem;
  }
}

//购物车全选/清空
.cart__allop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.14rem;
  padding: 0.18rem;
  margin-bottom: 0.16rem;
  border-bottom: 1px solid $content-bgColor;
  .cart__all-check {
    display: flex;
    align-items: center;
    // vertical-align: top;
  }
  .iconfont {
    font-size: 0.19rem;
    position: relative;
    top: 00.01rem;
    margin-right: 0.08rem;
    color: $bgColor-lightBlue;
  }
}
</style>