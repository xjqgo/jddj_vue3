<template>
  <div class="top">
    <div class="top__icon iconfont">&#xe6a3;</div>
    <div class="top__user">
      <img
        class="top__user__touxiang"
        src="http://www.dell-lee.com/imgs/avatar.jpg"
      />
      <div class="top__user__name">热心市民李先生</div>
      <div class="top__user__id">ID: 1069643013</div>
      <div class="top__user__icon"></div>

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
    color: #fff;
    position: absolute;
    top: 0.4rem;
    right: 0.21rem;
  }
  &__user {
    margin: 0 0.18rem 0;
    background: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    border-radius: 8px;
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
      margin: 0.09rem 0 0.02rem;
      font-size: 24px;
      line-height: 0.36rem;
      color: #262628;
      letter-spacing: 0.19px;
    }
    &__id {
      font-size: 0.14rem;
      line-height: 0.17rem;
      color: #999;
    }
  }
  &__discount{
    margin-top: .12rem;
    padding: .12rem 0 .16rem;
    border-top: 1px solid #f1f1f1;
    width: 100%;
    display: flex;
    &__item{
      flex: 1;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
      &__title{
        font-size: .12rem;
        color: #C1C0C9;
        line-height: .17rem;
      }
      &__count{
        font-size: .2rem;
        color: #262628;
        line-height: .28rem;
        margin-top: .03rem;
      }
  }
}
</style>