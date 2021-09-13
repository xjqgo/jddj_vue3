<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe60e;</span>
    贵州省 贵阳市
    <span class="iconfont position__notive">&#xe628;</span>
  </div>
  <router-link to="/search" class="search">
    <span class="iconfont search__icon">&#xe60c;</span>
    <input type="text" placeholder="山姆会员商店优惠商品" />
  </router-link>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>

  <!-- 使用键盘1键左边`${}`差值表达式才能生效 -->
  <div class="icons">
    <div class="icons__item" v-for="item in list" :key="item.title">
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
      <p>{{item.title}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'Position',
  setup () {
    const list = [
      { title: '超市便利', imgName: '超市' },
      { title: '菜市场', imgName: '菜市场' },
      { title: '水果店', imgName: '水果店' },
      { title: '鲜花绿植', imgName: '鲜花' },
      { title: '医药健康', imgName: '医药健康' },
      { title: '家居时尚', imgName: '家居' },
      { title: '烘培蛋糕', imgName: '蛋糕' },
      { title: '签到', imgName: '签到' },
      { title: '大牌免运', imgName: '大牌免运' },
      { title: '红包套餐', imgName: '红包' }
    ]

    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
@import "./style/mixins.scss";
// 顶部内容
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.02rem;
    font-size: 0.2rem;
  }
  .position__notive {
    position: absolute;
    top: 0.17rem;
    right: 0;
    font-size: 0.2rem;
  }
}
.search {
  display: block;
  line-height: 0.32rem;
  background: #f5f5f5;
  border-radius: .16rem;
  color: #b7b7b7;
  font-size: 0.14rem;
  &__icon {
    padding: 0 0.05rem 0 .16rem;
  }
  input {
    width: 83%;
    border: 0;
    outline: none; // 去除选中状态边框
    background: inherit;
    color: inherit;
  }
  input::-webkit-input-placeholder {
    //占位符颜色
    color: inherit;
  }
}
.banner {
  // 图片防抖动
  height: 0;
  overflow: hidden;
  margin-top: .12rem;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    img {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin: 0 auto; //水平居中
    }
    p {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
//分割
.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
}
</style>
