<template>
  <div class="shop">
    <div class="shop__title">沃尔玛</div>
    <div class="shop__product">
      <div class="shop__product__item">
        <img
          class="shop__product__img"
          src="http://www.dell-lee.com/imgs/vue3/tomato.png"
        />
        <div class="shop__product__info">
          <div class="shop__product__title">番茄250g/份</div>
          <div class="shop__product__tags">
            <span class="shop__product__count"
              ><span class="shop__rmb-icon">￥</span>33.6 x 3</span
            >
            <span class="shop__product__price"
              ><span class="shop__rmb-icon">￥</span>99.9</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="shop__tishi">
      共计3件/1.4kg<span class="iconfont">&#xe603;</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shop {
  margin: 0.16rem 0.18rem 0;
  padding: 0.16rem;
  background: #fff;
  &__title {
    font-size: 0.16rem;
    color: #333;
    font-weight: 600;
  }
  &__tishi {
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.28rem;
    background: #f5f5f5;
    color: #999;
    margin-top: 0.16rem;
    .iconfont {
      margin-left: 0.08rem;
      position: relative;
      top: 0.04rem;
    }
  }
  &__product {
    &__item {
      display: flex;
      margin-top: 0.16rem;
    }
    &__img {
      height: 0.46rem;
      width: 0.46rem;
      margin-right: 0.16rem;
    }
    &__info {
      flex: 1;
    }
    &__title {
      font-size: 0.14rem;
      color: #333;
      font-weight: 600;
      margin-bottom: 0.06rem;
    }
    &__tags {
      font-size: 0.14rem;
      line-height: 0.2rem;
      display: flex;
      justify-content: space-between;
    }
    &__count {
      color: #e93b3b;
    }
  }
  &__rmb-icon {
    font-size: 0.2rem;
    width: 0.13rem;
    display: inline-block;
    transform: scale(0.5);
    transform-origin: bottom;
    position: relative;
    top: -0.01rem;
  }
}
</style>