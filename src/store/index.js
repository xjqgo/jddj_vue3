import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      1: {
        1: {
          imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
          name: "番茄 250g / 份",
          oldPrice: 39.6,
          price: 33.6,
          sales: 10,
          _id: "1",
          count: 1,
          check:true
        }
      }

    }
  },
  mutations: {
    setCartList(state, playLoad) {
      const { shopId, goodsObj,num } = playLoad
      const goodsId=goodsObj._id
      let shopInfo=state.cartList[shopId]
      let product = state.cartList[shopId]?.[goodsId]
      if(!shopInfo)shopInfo={}
      if (!product) {
        product = goodsObj
        product.count=0
      }
      console.log(num);
      product.count += num
      if (product.count === 0) {
        delete state.cartList[shopId]?.[goodsId];
        console.log('del', state.cartList[shopId]);
        return
      }
      else if (num>=1) product.check=true
      shopInfo[goodsId] = product
      state.cartList[shopId] = shopInfo
      console.log('qq',state.cartList[shopId]);
    }
  },
  actions: {
  },
  modules: {
  }
})
