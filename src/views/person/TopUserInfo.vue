<template>
  <div class="top">
    <div class="top__icon iconfont">&#xe6a3;</div>
    <div class="top__user">
      <img
        class="top__user__touxiang"
        src="http://www.dell-lee.com/imgs/avatar.jpg"
      />
      <div class="top__user__name">
        热心市民李先生
        <div class="top__user__icon">
          <span class="top__user__icon__star iconfont">&#xe601;</span>
          <span class="top__user__icon__count">16</span>
        </div>
      </div>
      <div class="top__user__id">ID: 1069643013</div>

      <div class="top__discount">
        <div class="top__discount__item">
          <span class="top__discount__title">红包</span>
          <span class="top__discount__count">218</span>
        </div>
        <div class="top__discount__item">
          <span class="top__discount__title">优惠券</span>
          <span class="top__discount__count">12张</span>
        </div>
        <div class="top__discount__item">
          <span class="top__discount__title">鲜豆</span>
          <span class="top__discount__count">88</span>
        </div>
        <div class="top__discount__item">
          <span class="top__discount__title">白条</span>
          <span class="top__discount__count">1000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.top {
  position: relative;
  background-size: 100% 1.9rem;
  background-repeat: no-repeat;
  background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  padding-top: 1.08rem;
  &__icon {
    font-size: 0.2rem;
    color: $textColor-white;
    position: absolute;
    top: 0.4rem;
    right: 0.21rem;
  }
  &__user {
    margin: 0 0.18rem 0;
    background: $bgColor-white;
    @include shadow;
    border-radius: .08rem;
    padding-top: 0.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    &__touxiang {
      position: absolute;
      top: 0.55rem;
      width: 0.94rem;
      height: 0.94rem;
      border-radius: 50%;
    }
    &__name {
      position: relative;
      margin: 0.09rem 0 0.02rem;
      font-size: .24rem;
      line-height: 0.36rem;
      color: $blanks-fontcolor;
      letter-spacing: .19rem;
    }
    &__id {
      font-size: 0.14rem;
      line-height: 0.17rem;
      color: $light-fontcolor;
    }
    &__icon {
      position: absolute;
      top: 0.1rem;
      right: -0.45rem;
      height: 0.15rem;
      width: 0.35rem;
      background-image: linear-gradient(180deg, #bee700 0%, #8aca00 100%);
      border-radius: .075rem;
      &__star {
        @include star;
      }
      &__count {
        display: inline-block;
        font-size: 0.2rem;
        transform: scale(0.5);
        color: $textColor-white;
        letter-spacing: -.36rem;
        position: absolute;
        top: -0.11rem;
        left: 0.11rem;
      }
    }
  }
  &__discount {
    margin-top: 0.12rem;
    padding: 0.12rem 0 0.16rem;
    border-top: .01rem solid $content-bgColor;
    width: 100%;
    display: flex;
    &__item {
      flex: 1;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    &__title {
      font-size: 0.12rem;
      color: $discount-title;
      line-height: 0.17rem;
    }
    &__count {
      font-size: 0.2rem;
      color: $blanks-fontcolor;
      line-height: 0.28rem;
      margin-top: 0.03rem;
    }
  }
}
</style>