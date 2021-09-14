<template>
  <!--  v-if=防报错 v-show=防抖 -->
  <div class="item" v-if="item" v-show="item.imgUrl">
    <div class="item__img"><img :src="item.imgUrl" /></div>
    <div class="item__info">
      <div class="item__title">{{ item.name }}</div>
      <div class="tab">
        <span>月销:{{ item.sales }}</span>
        <span>起送:{{ item.expressLimit }}</span>
        <span>基础运费:{{ item.expressPrice }}</span>
      </div>
      <p>{{ item.slogan }}</p>
      <div class="product" v-if="product">
        <div class="product__item" v-for="i in 3" :key="i">
          <img
            class="product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
          />
          <div class="product__item__title">超甜橙子252qasw</div>
          <div class="product__item__price">
            <span class="product__item__price__icon">¥</span>
            <span class="product__item__price__current">33.6</span>
            <span class="product__item__price__root">¥33.6</span>
          </div>
        </div>
      </div>
      <div v-if="!hidegap" class="item__gap"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shopinfo",
  props: ["item", "hidegap", "product"],
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.item {
  display: flex;
  font-size: 0.13rem;
  &__img {
    height: 0.56rem;
    width: 0.56rem;
    margin: 0 0.16rem 0 0;
    img {
      height: 0.56rem;
      width: 0.56rem;
    }
  }
  &__info {
    width: 100%;
  }
  &__title {
    font-size: 0.2rem;
    color: $content-fontcolor;
  }
  .tab {
    margin: 0.08rem 0;
    span {
      margin-right: 0.16rem;
    }
  }
  p {
    margin: 0;
    color: #e93b3b;
  }
  .item__gap {
    height: 0.01rem;
    background: #f1f1f1;
    margin: 0.12rem 0;
  }
}
.product {
  display: flex;
  &__item {
    margin: 0.08rem 0.16rem 0 0;
      width: 0.76rem;
    &__img {
      width: 0.76rem;
      height: 0.76rem;
    }
    &__title {
      font-size: 0.12rem;
      line-height: 0.17rem;
      margin: 0.04rem 0 0.05rem;
      letter-spacing: .003rem;
      color: #333;
        @include ellipsis;
    }
    &__price {
      line-height: 0.14rem;
      white-space: nowrap;
      color: #e93b3b;
      &__icon,
      &__root {
        @include scale05;
        position: relative;
        top: .06rem;
      }
      &__current {
        font-size: 0.14rem;
        font-weight: 600;
        position: relative;
        left: -0.03rem;
      }
      &__root {
        color: #999999;
        top: .07rem;
        left: -0.12rem;
        text-decoration: line-through;
      }
    }
  }
}
</style>