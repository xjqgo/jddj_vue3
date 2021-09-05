import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state;
  localStorage.cartList = JSON.stringify(cartList)
}
const getLocalCartList = () => {
  return JSON.parse(localStorage.cartList || '{}')// 参数必须为字符数
}

export default createStore({
  // state里面的object和array类型会自动包裹成proxy
  // cartList{shopId:{shopName,productList:{id:{}}}}
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    setShopName(state, playLoad) {
      const { shopId, shopName } = playLoad
      const shopInfo = state.cartList[shopId] || {}
      if (!shopInfo.shopName) {
        shopInfo.shopName = shopName + '-' + shopId
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
        setLocalCartList(state)
        return
      }
      else if (goodsId == 'clear') {
        state.cartList[shopId].productList = {}
        setLocalCartList(state)
        return
      }
      else if (goodsId == 'clearOrder') {
        for (const key in shopInfo.productList) {
          if (Object.hasOwnProperty.call(shopInfo.productList, key)) {
            if (state.cartList[shopId].productList[key].check) delete state.cartList[shopId].productList[key]
          }
        }
        setLocalCartList(state)
        return
      }

      if (!product) {
        product = goodsObj
        product.count = 0
      }
      product.count += num
      if (product.count === 0) {
        delete state.cartList[shopId]?.productList?.[goodsId];
        setLocalCartList(state)
        return
      }
      else if (num >= 1) product.check = true
      shopInfo.productList[goodsId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },

  },
  actions: {
  },
  modules: {
  }
})
