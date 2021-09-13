<template>
      <div class="search">
        <div @click="$router.back()" class="search__back iconfont">&#xe64c;</div>

        <div class="search__content">
          <div class="search__content__icon iconfont">&#xe60c;</div>
          <input placeholder="请输入商品名称搜索" @click="$router.push('/search')"/>
        </div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.search {
  margin: 0.16rem 0.18rem 0.16rem 0;
  height: 0.32rem;
  display: flex;
  font-size: 0.16rem;
  line-height: 0.32rem;
  &__back {
    font-size: 0.24rem;
    color: $light-backColor;
    margin: 0 0.1rem 0 -0.16rem;
  }
  &__content {
    display: flex;
    background: $content-bgColor5;
    border-radius: .16rem;
    border-radius: .16rem;
    width: 100%;
    &__icon {
      color: $search-iconColor;
      margin: 0 0.08rem;
    }
    input {
      border: none;
      outline: none;
      background: none;
      line-height: 0.32rem;
      width: 100%;
      padding-right: 0.2rem;
      color: $content-fontcolor;
    }
    ::placeholder {
      font-size: .14rem;
      color: $content-fontcolor;
    }
  }
}
</style>