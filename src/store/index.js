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
          count: 1
        }
      }
    }
  },
  mutations: {
    setCartList(state, playLoad) {
      const { shopId, goodsObj } = playLoad
      const goodsId=goodsObj._id
      let shopInfo=state.cartList[shopId]
      let product = state.cartList[shopId]?.[goodsId]
      if(!shopInfo)shopInfo=[]
      if (!product) {
        product = goodsObj
        product.count=0
      }
      product.count++
      shopInfo[goodsId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
