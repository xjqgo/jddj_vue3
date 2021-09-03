<template>
  <div
    class="mask"
    v-show="(showCart && calculations.total) || (showCart = false)"
    @click="showCart = !showCart"
  ></div>
  <div class="cart">
    <div class="cart__products" v-show="showCart && calculations.total">
      <div class="cart__allop">
        <div
          class="cart__all-check"
          @click="
            changeCartItem(shopId, { _id: 'allCheck' }, calculations.allCheck)
          "
        >
          <span class="iconfont">{{
            calculations.allCheck ? "&#xe70f;" : "&#xe667;"
          }}</span>
          <span>全选</span>
        </div>
        <div
          class="cart__clear"
          @click="
            () => {
              changeCartItem(shopId, { _id: 'clear' }, -1);
              showCart = !showCart;
            }
          "
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
                <span class="minus  iconfont" @click="changeCartItem(shopId, item, -1)"
                  >&#xe6d0;</span
                >
                <span class="jianshu">{{ item.count }}</span>
              </span>
              <span
                class="changeCartItem iconfont"
                @click="changeCartItem(shopId, item, 1)"
                >&#xe615;</span
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
      <div class="cart__icon" v-show="calculations.total">
        {{ calculations.total }}
      </div>
      <span v-show="calculations.total">
        <span class="cart__text">合计：</span>
        <span class="cart__price">￥{{ calculations.price }}</span>
      </span>
      <span class="cart__text" v-show="!calculations.total">购物车是空的</span>
    </div>
    <router-link
      :to="{ path: calculations.total ? `/settlement/${shopId}` : '' }"
    >
      <div
        :class="{
          cart__jiesuan: true,
          'cart__jiesuan--null': !calculations.total,
        }"
      >
        去结算
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
import { cartEffect } from "../../effects/cartEffect";

const cartEffects = () => {
  const route = useRoute();
  const shopId = route.params.id;
  const { changeCartItem, cartList } = cartEffect();

  const calculations = computed(() => {
    const result = { total: 0, price: 0, allCheck: true };
    const productList = cartList[shopId]?.productList;
    for (const key in productList) {
      if (Object.hasOwnProperty.call(productList, key)) {
        result.total += productList[key].count;
        if (productList[key].check)
          result.price +=
            productList[key].count * productList[key].price.toFixed(2);
        if (!productList[key].check) {
          result.allCheck = false;
          break;
        }
      }
    }

    result.price = result.price.toFixed(2);
    return result;
  });

  const contentLiat = computed(() => {
    return cartList[shopId]?.productList || {};
  });

  return { calculations, contentLiat, changeCartItem, shopId };
};

export default {
  name: "Cart",
  setup() {
    const showCart = ref(false);
    const { shopId, contentLiat, changeCartItem, calculations } = cartEffects();
    return {
      contentLiat,
      changeCartItem,
      shopId,
      calculations,
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
         position: relative; 
         top: -.02rem;
        }
        .minus,
        .changeCartItem {
          display: inline-block;
          font-size: 0.2rem;
          height: 0.2rem;
          width: 0.2rem;
        }
        .changeCartItem {
          color: $bgColor-lightBlue;
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
  a {
    text-decoration: none;
  }
  &__jiesuan {
    width: 0.98rem;
    line-height: 0.49rem;
    background: rgba($color: $bgColor-lightBlue, $alpha: 0.7);
    color: $textColor-white;
    text-align: center;
    font-size: 0.14rem;
  }
  &__jiesuan--null {
    background: rgba($color: $light-fontcolor, $alpha: 0.7);
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