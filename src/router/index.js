// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home'),
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/Search'),
  },
  {
    path: '/searchRes',
    name: 'SearchRes',
    component: () => import(/* webpackChunkName: "searchRes" */ '../views/searchRes/SearchRes'),
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList'),
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "home" */ '../views/shop/Shop'),
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import(/* webpackChunkName: "person" */ '../views/person/Person'),
  },
  {
    path: '/userAddress',
    name: 'UserAddress',
    component: () => import(/* webpackChunkName: "userAddress" */ '../views/userAddress/UserAddress'),
  },
  {
    path: '/addAddress',
    name: 'AddAddress',
    component: () => import(/* webpackChunkName: "addAddress" */ '../views/addAddress/AddAddress'),
  },
  {
    path: '/addAddress/:id',
    name: 'EditAddress',
    component: () => import(/* webpackChunkName: "addAddress-id" */ '../views/addAddress/AddAddress'),
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/Order'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  const { isLogin } = localStorage
  const isLoginRegister = (to.name === 'Login' || to.name === 'Register')
  isLogin || isLoginRegister ? next() : next({ name: 'Login' })
})

export default router
