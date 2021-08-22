import { createStore } from 'vuex'

export default createStore({
  // state里面的object和array类型会自动包裹成proxy
  state: {
    cartList: {
      1: {
        shopName: '沃尔玛',
        productList: {
          1: {
            imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
            name: "番茄 250g / 份",
            oldPrice: 39.6,
            price: 33.6,
            sales: 10,
            _id: "1",
            count: 1,
            check: true
          }
        }
      }
    }
  },
  mutations: {
    setShopName(state, playLoad) {
      const { shopId, shopName } = playLoad
      const shopInfo = state.cartList[shopId] || {}
      if (!shopInfo.shopName) {
        shopInfo.shopName = shopName+'-'+shopId
        shopInfo.productList = {}
      }
      state.cartList[shopId] = shopInfo
    },
    setCartList(state, playLoad) {
      const { shopId, goodsObj, num } = playLoad
      const goodsId = goodsObj._id
      let shopInfo = state.cartList[shopId]
      let product = state.cartList[shopId]?.productList?.[goodsId]

      if (goodsId == 'allCheck') {
        for (const key in shopInfo.productList) {
          if (Object.hasOwnProperty.call(shopInfo.productList, key)) {
            if (num) state.cartList[shopId].productList[key].check = false
            else state.cartList[shopId].productList[key].check = true
          }
        }
        return
      }
      if (goodsId == 'clear') {
        state.cartList[shopId].productList = {}
        return
      }

      if (!product) {
        product = goodsObj
        product.count = 0
      }
      product.count += num
      if (product.count === 0) {
        delete state.cartList[shopId]?.productList?.[goodsId];
        return
      }
      else if (num >= 1) product.check = true
      shopInfo.productList[goodsId] = product
      state.cartList[shopId] = shopInfo
      console.log('qq', state.cartList[shopId]);
    },

  },
  actions: {
  },
  modules: {
  }
})
