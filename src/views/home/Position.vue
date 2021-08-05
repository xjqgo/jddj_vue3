<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe60e;</span>
    北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notive">&#xe628;</span>
  </div>
  <div class="search">
    <span class="iconfont search__icon">&#xe60c;</span>
    <input type="text" placeholder="山姆会员商店优惠商品" />
  </div>

  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>

  <div class="icons">
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png" />
      <p>超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
      <p>菜市场</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/水果店.png" />
      <p>水果店</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/鲜花.png" />
      <p>鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/医药健康.png" />
      <p>医药健康</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/家居.png" />
      <p>家居时尚</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" />
      <p>烘培蛋糕</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/签到.png" />
      <p>签到</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" />
      <p>大牌免运</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/红包.png" />
      <p>红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'Position'
}
</script>

<style lang="scss">
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
  line-height: 0.32rem;
  background: #f5f5f5;
  border-radius: 16px;
  color: #b7b7b7;
  font-size: 0.14rem;
  &__icon {
    padding: 0 0.05rem 0 0.16rem;
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
