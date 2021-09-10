<template>
  <div class="keys">
    <div class="keys__hander">
      <div class="keys__hander__name">{{ name }}</div>
      <div class="keys__hander__clear" v-if="clear" @click="handlerClear">
        清除搜索历史
      </div>
    </div>
    <div class="keys__list">
      <router-link
        :to="`searchRes?key=${item}`"
        class="keys__list__item"
        v-for="item in arr"
        :key="item"
        >{{ item }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';
export default {
  props: ["name", "clear", "arr"],
  setup(props) {
    const {arr} = toRefs(props);
    const handlerClear = () => {
      arr.value.length=0
    };
    
    return {handlerClear}
  },
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
      margin-bottom: 0.12rem;
    }
    &__clear {
      font-size: 0.14rem;
    }
  }
  &__list {
    background: #fff;
    margin-right: -0.1rem;
    &__item {
      display: inline-block;
      font-size: 0.14rem;
      line-height: 0.16rem;
      color: #666;
      padding: 0.08rem 0.1rem;
      margin: 0 0.1rem 0.12rem 0;
      background: #f5f5f5;
      border-radius: 0.02rem;
    }
  }
}
</style>