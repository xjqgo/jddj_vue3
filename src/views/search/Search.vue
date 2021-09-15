<template>
  <div class="wrapper">
    <div class="search">
      <div to="/search" class="search__input">
        <span class="iconfont search__input__icon">&#xe60c;</span>
        <input
          class="search__input__text"
          placeholder="尖椒肉丝"
          v-model="keysInput"
          @keyup.enter="handlerEnter"
          ref="input"
        />
      </div>
      <div class="iconfont search__cancel" @click="handlerCancel($refs)">
        取消
      </div>
    </div>
    <Keys name="搜索历史" :arr="keysHistory" :clear="true" />
    <Keys name="热门搜索" :arr="keysHot" ref="hot" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Keys from "./Keys.vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: { Keys },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const keysHistory = ref([
      "尖椒肉丝",
      "鲜花",
      "山姆会员商店",
      "新鲜水果.",
      "生日鲜花",
      "香槟玫瑰",
      "酸奶",
      "牛奶",
    ]);
    const keysHot = ref([
      "C罗",
      "梅西",
      "内马尔",
      "武磊",
      "丁俊晖",
      "香槟玫瑰",
      "酸奶",
      "牛奶",
    ]);
    const keysInput = ref("");
    const handlerEnter = () => {
      router.push(`searchRes?key=${keysInput.value}`);
    };
    const handlerCancel = (e) => {
      console.log("route", route);
      console.log("router", router);
      console.log("this", e);

      if (keysInput.value != "") {
        keysInput.value = "";
        e.input.focus();
      } else router.back();
    };
    return {
      keysHistory,
      keysHot,
      handlerEnter,
      keysInput,
      handlerCancel,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper {
  padding: 0.16rem 0.18rem 0;
}
.search {
  display: flex;
  white-space: nowrap;
  height: 0.32rem;
  .search__input {
    line-height: 0.32rem;
    background: #f5f5f5;
    border-radius: 0.16rem;
    color: #b7b7b7;
    width: 100%;
    font-size: 0.14rem;
    &__icon {
      padding: 0 0.05rem 0 0.16rem;
    }
    &__text {
      width: 83%;
      border: 0;
      outline: none; // 去除选中状态边框
      background: inherit;
      color: #333;
      position: relative;
      top: -0.02rem;
    }
    &__text::-webkit-input-placeholder {
      //占位符颜色
      color: #333;
      font-size: 0.14rem;
    }
  }
  &__cancel {
    font-size: 0.16rem;
    line-height: 0.32rem;
    color: #333;
    margin-left: 0.12rem;
  }
}
</style>