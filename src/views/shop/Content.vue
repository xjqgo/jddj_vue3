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
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份番茄250g/份番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="content__right__img"
          src="	http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="content__right__info">
          <h4 class="title">番茄250g/份</h4>
          <div class="sales">月售10件</div>
          <div class="jgjs">
            <div class="price">
              <span class="yuan">￥</span>
              <span class="xianjia">33.6</span>
              <span class="yuanjia">￥36.8</span>
            </div>
            <div class="number">
              <span class="minus">-</span>
              <span class="jianshu">0</span>
              <span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const tabList = [
      { name: "全部商品", tab: "all" },
      { name: "秒杀", tab: "seckill" },
      { name: "新鲜水果", tab: "fruit" },
    ];

    // tab点击
    const currentTab = ref("all");
    const tabClick = (tab) => {
      currentTab.value=tab
    };

    return { tabList, tabClick, currentTab };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
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
        border-radius: 2px;
      }
    }
  }
  &__right {
    overflow-y: scroll;
    flex: 1;
    .item {
      display: flex;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin: 0 0.16rem 0.12rem 0.16rem;
    }
    &__info {
      flex: 1;
      overflow: hidden;
      padding-bottom: 0.12rem;
      border-bottom: 1px solid #f1f1f1;
      margin-right: 0.18rem;
      margin-bottom: 0.12rem;
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
        }
        .minus,
        .add {
          display: inline-block;
          font-size: 0.2rem;
          text-align: center;
          line-height: 0.16rem;
          height: 0.2rem;
          width: 0.2rem;
          border-radius: 50%;
          border: 1px solid #000;
        }
        .add {
          color: $textColor-white;
          background: #0091ff;
          border: 1px solid #0091ff;
        }
      }
      .price {
        color: #e93b3b;
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