<template>
  <div class="order">
    <div class="order__hander">
      <span class="order__hander__sname">沃尔玛</span>
      <span class="order__hander__state">已取消</span>
    </div>
    <div class="order__info">
      <div class="order__info__img">
        <img src="http://www.dell-lee.com/imgs/vue3/cherry.png" />
        <img src="http://www.dell-lee.com/imgs/vue3/cherry.png" />
        <img src="http://www.dell-lee.com/imgs/vue3/cherry.png" />
        <img src="http://www.dell-lee.com/imgs/vue3/cherry.png" />
      </div>
      <div class="order__info__tags">
        <div class="order__info__price">¥36.88</div>
        <div class="order__info__count">共2件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order {
  margin: 0.16rem 0.18rem 0 0.18rem;
  padding: 0.16rem;
  background: #fff;
  border-radius: 4px;
  &__hander {
    display: flex;
    justify-content: space-between;
    &__sname {
      font-size: .16rem;
      line-height: .22rem;
      color: #333333;
      font-weight: 600;
    }
    &__state {
      font-size: .14rem;
      height: .2rem;
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
      font-size: .14rem;
      color: #e93b3b;
      margin-bottom: .04rem;
    }
    &__count {
      font-size: .12rem;
      color: #333333;
      line-height: .14rem;
      text-align: right;
    }
  }
}
</style>