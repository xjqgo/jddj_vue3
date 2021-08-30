<template>
  <div class="info">
    <div class="info__name">
      小慕<span class="info__name__phome">18911023261</span>
    </div>
    <div class="info__address">
      北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层
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
    &__phome {
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