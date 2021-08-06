<template>
    <div class="goods">
      <h3>附近店铺</h3>
      <div class="items">
        <div class="item" v-for="item in list" :key="item.id">
          <img :src="item.img" />
          <div class="item__info">
            <div class="item__title">{{item.title}}</div>
            <div class="tab">
              <span v-for="item in item.tags" :key="item">{{item}}</span>
            </div>
            <p>{{item.decs}}</p>
            <div class="item__gap"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Goods',
  setup () {
    const list = [
      { id: 1, img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tags: ['月售1万+', '起送¥0', '基础运费¥'], decs: 'VIP尊享满89元减4元运费券（每月3张）' },
      { id: 2, img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛l7', tags: ['月售1万+', '起送¥5', '基础运费¥'], decs: 'VIP尊享满89元减4元运费券（每月3张）' },
      { id: 3, img: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛l1', tags: ['月售1万+', '起送¥2', '基础运费¥'], decs: 'VIP尊享满89元减1元运费券（每月3张）' }
    ]

    return {
      list
    }
  }
}
</script>

<style lang="scss">
.goods {
  h3 {
    font-size: 0.18rem;
    margin-bottom: 0.14rem;
    color: #333333;
  }
  .item {
    display: flex;
    font-size: 0.13rem;
    img {
      height: 0.56rem;
      width: 0.56rem;
      margin: 0 0.16rem 0 0;
    }
    .item__info{
      width: 100%;
    }
    .item__title {
      font-size: 0.2rem;
      color: #333333;
    }
    .tab {
      margin: 0.08rem 0;
      span {
        margin-right: 0.16rem;
      }
    }
    p {
      margin: 0;
      color: #e93b3b;
    }
    .item__gap{
      height: .01rem;
      background: #F1F1F1;
      margin: 0.12rem 0;
    }
  }
}
</style>
