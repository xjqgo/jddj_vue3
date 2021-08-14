<template>
  <div class="item">
    <div class="item__img"><img :src="item.imgUrl" /></div>
    <div class="item__info">
      <div class="item__title">{{ item.name }}</div>
      <div class="tab">
        <span>月销:{{ item.sales }}</span>
        <span>起送:{{ item.expressLimit }}</span>
        <span>基础运费:{{ item.expressPrice }}</span>
      </div>
      <p>{{ item.slogan }}</p>
      <div v-if="!hidegap" class="item__gap"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shopinfo",
  props: ["item", "hidegap"],
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
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
</style>