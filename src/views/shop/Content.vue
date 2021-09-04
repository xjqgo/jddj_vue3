<template>
  <div class="content">
    <div class="content__left">
      <div
        :class="{
          content__left__item: true,
          'content__left__item--active': item.tab === currentTab,
        }"
        v-for="item in tabList"
        :key="item.tab"
        @click="tabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="content__right">
      <div class="item" v-for="item in contentLiat" :key="item._id">
        <img class="content__right__img" :src="item.imgUrl" />
        <div class="content__right__info">
          <h4 class="title">{{ item.name }}</h4>
          <div class="sales">月售{{ item.sales }}件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">{{ item.price }}</span>
              <span class="yuanjia">￥{{ item.oldPrice }}</span>
            </div>
            <div class="number">
              <!-- 件数为0不显示 -->
              <span v-show="getCartProductCount(shopId, item._id)">
                <span class="minus iconfont" @click="changeCartItem(shopId, item, -1)"
                  >&#xe6d0;</span
                >
                <span class="jianshu">{{
                  getCartProductCount(shopId, item._id)
                }}</span>
              </span>
              <span
                class="changeCartItem iconfont"
                @click="changeCartItem(shopId, item, 1)"
                >&#xe615;</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { get } from "../../util/request";
import { useRoute } from "vue-router";
import { watchEffect } from "@vue/runtime-core";
import { cartEffect } from "../../effects/cartEffect";

// tab相关处理
const tabEffect = () => {
  const tabList = [
    { name: "全部商品", tab: "all" },
    { name: "秒杀", tab: "seckill" },
    { name: "新鲜水果", tab: "fruit" },
  ];

  const currentTab = ref(tabList[0].tab);
  const tabClick = (tab) => {
    currentTab.value = tab;
  };

  return { tabList, tabClick, currentTab };
};

// 商品列表相关
const shopListEffect = (currentTab, id) => {
  const contentLiat = ref([]);
  const getContent = async () => {
    const result = await get(`/api/shop/${id}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0) {
      contentLiat.value = result.data;
    }
  };

  watchEffect(() => {
    getContent();
  });

  return { contentLiat };
};

export default {
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { tabList, tabClick, currentTab } = tabEffect();
    const { contentLiat } = shopListEffect(currentTab, shopId);
    const { changeCartItem, cartList, getCartProductCount } = cartEffect();
    return {
      tabList,
      tabClick,
      currentTab,
      contentLiat,
      cartList,
      changeCartItem,
      shopId,
      getCartProductCount,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.content {
  position: absolute;
  display: flex;
  top: 1.55rem;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  &__left {
    width: 0.76rem;
    background: #f5f5f5;
    overflow-y: scroll;
    &__item {
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &--active {
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.14rem;
        color: $content-fontcolor;
        background: $bgColor-white;
        border-radius: .02rem;
      }
    }
  }
  &__right {
    overflow-y: scroll;
    flex: 1;
    .item {
      display: flex;
      border-bottom: .01rem solid $content-bgColor;
      padding-bottom: .12rem;
      margin:0 .18rem .12rem .16rem;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin: 0 0.16rem 0 0;
    }
    &__info {
      flex: 1;
      overflow: hidden;
      .title {
        margin: 0;
        font-size: 00.14rem;
        @include ellipsis;
      }
      .sales {
        margin: 0.06rem 0;
        line-height: 0.16rem;
        font-size: 0.12rem;
      }
      .jgjs {
        display: flex;
        justify-content: space-between; /* 横向中间自动空间 */
        // align-content: space-between;  /* 竖向中间自动空间 */
        .jianshu {
          margin: 0 0.1rem;
         position: relative; 
         top: -.02rem;
        }
        .minus,
        .changeCartItem {
          display: inline-block;
          font-size: 0.2rem;
          height: 0.2rem;
          width: 0.2rem;
        }
        .changeCartItem {
          color: $bgColor-lightBlue;
        }
      }
      .price {
        color: $textColor-lightRed;
        span {
          display: inline-block;
        }
        .xianjia {
          line-height: 0.2rem;
          font-size: 0.14rem;
        }
        .yuanjia {
          color: $light-fontcolor;
          text-decoration: line-through;
          margin-left: 00.06rem;
          line-height: 0.2rem;
          font-size: 0.12rem;
          position: relative;
          top: -0.01rem;
        }
      }
    }
  }
}
</style>