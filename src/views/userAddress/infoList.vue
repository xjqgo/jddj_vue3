<template>
  <div class="info">
    <div class="info__name">
      {{item.name}}<span class="info__name__phone">{{item.phone}}</span>
    </div>
    <div class="info__address">
      {{item.city}} {{item.department}}-{{item.houseNumber}}
    </div>
    <div class="info__edit iconfont">&#xe64c;</div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.info {
  margin: 0 0.18rem 0.16rem 0.18rem;
  padding: 0.18rem .16rem;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  &__name {
    line-height: 0.2rem;
    margin-bottom: 0.08rem;
    color: #999999;
    &__phone {
      margin-left: 0.66rem;
    }
  }
  &__address {
    color: #333;
    margin-right: 0.63rem;
    line-height: .2rem;
  }
  &__edit {
    position: absolute;
    right: .16rem;
    top: .45rem;
    transform: rotate(180deg);
  }
}
</style>