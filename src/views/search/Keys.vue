<template>
  <div class="keys">
    <div class="keys__hander">
      <div class="keys__hander__name">{{ name }}</div>
      <div class="keys__hander__clear" v-if="clear" @click="handlerClear">清除搜索历史</div>
    </div>
    <div class="keys__list">
      <router-link :to="`searchRes?key=${item}`" class="keys__list__item" v-for="item in arr" :key="item">{{item}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "clear", "arr"],
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";

.keys {
  margin-top: 0.24rem;
      color: #333;
  &__hander {
    display: flex;
    justify-content: space-between;
    &__name {
      font-size: 0.16rem;
      font-weight: 600;
      margin-bottom: .12rem;
    }
    &__clear {
      font-size: 0.14rem;
    }
  }
  &__list{
      background: #fff;
      margin-right: -.1rem;
      &__item{
          display: inline-block;
          font-size: .14rem;
          line-height: .16rem;
          color: #666;
          padding: .08rem .1rem;
          margin: 0 .1rem .12rem 0;
          background: #F5F5F5;
          border-radius: .02rem;
      }
  }
}
</style>