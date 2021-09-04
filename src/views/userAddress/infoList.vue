<template>
  <div class="info">
    <div class="info__name">
      {{ item.name }}<span class="info__name__phone">{{ item.phone }}</span>
    </div>
    <div class="info__address">
      {{ item.city }} {{ item.department }}-{{
        item.houseNumber
      }}
    </div>
    <router-link :to="`/addAddress/${item._id}`">
      <div class="info__edit iconfont">&#xe64c;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.info {
  margin: 0 0.18rem 0.16rem 0.18rem;
  padding: 0.18rem 0.16rem;
  background: $bgColor-white;
  border-radius: .04rem;
  font-size: .14rem;
  position: relative;
  &__name {
    line-height: 0.2rem;
    margin-bottom: 0.08rem;
    color: $light-fontcolor;
    &__phone {
      margin-left: 0.66rem;
    }
  }
  &__address {
    color: $content-fontcolor;
    margin-right: 0.63rem;
    line-height: 0.2rem;
    @include lines(2);
  }
  &__edit {
    position: absolute;
    right: 0.16rem;
    top: 0.45rem;
    transform: rotate(180deg);
  }
}
</style>