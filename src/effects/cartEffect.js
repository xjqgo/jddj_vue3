import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";


// 购物车相关操作
export const cartEffect = (shopId) => {
    const store = useStore();
    const { cartList } = reactive(store.state);
    
    // 修改购物车休息
    const changeCartItem = (shopId, goodsObj, num) => {
        store.commit("setCartList", { shopId, goodsObj, num });
    };
    // 取加购件数
    const getCartProductCount = (shopId, productId) => {
        return cartList[shopId]?.productList[productId]?.count || 0
    };
    return { cartList, cartShop:cartList[shopId], changeCartItem, getCartProductCount };
};