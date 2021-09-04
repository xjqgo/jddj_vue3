<template>
  <div class="order">
    <div class="order__hander">
      <span class="order__hander__sname">{{
        item.shopName + "-" + item.shopId
      }}</span>
      <span class="order__hander__state">{{
        !item.isCanceled ? "已订购" : "已取消"
      }}</span>
    </div>
    <div class="order__info">
      <div class="order__info__img">
        <img
          v-for="item in item.products"
          :key="item"
          :src="`${item.product.img}`"
        />
      </div>
      <div class="order__info__tags">
        <div class="order__info__price">¥{{ item.totalPrice }}</div>
        <div class="order__info__count">共 {{ item.totalNumber }} 件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['item']
};
</script>

<style lang="scss" scoped>
.order {
  margin: 0.16rem 0.18rem 0 0.18rem;
  padding: 0.16rem;
  background: #fff;
  border-radius: .04rem;
  &__hander {
    display: flex;
    justify-content: space-between;
    &__sname {
      font-size: 0.16rem;
      line-height: 0.22rem;
      color: #333333;
      font-weight: 600;
    }
    &__state {
      font-size: 0.14rem;
      height: 0.2rem;
      color: #999999;
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.16rem;
    &__img {
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.12rem;
      }
    }
    &__price {
      font-size: 0.14rem;
      color: #e93b3b;
      margin-bottom: 0.04rem;
      text-align: right;
    }
    &__count {
      font-size: 0.12rem;
      color: #333333;
      line-height: 0.14rem;
      text-align: right;
    }
  }
}
</style>