import Vue from 'vue'
import Router from 'vue-router'
import Master from './views/Master.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '*',
      redirect: 'admin/login'
    },
    {
      path: '/',
      name: '',
      component: Master,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/view/Home.vue')
        },
        {
          path: 'details/:id',
          name: 'Details',
          component: () => import('@/pages/view/Details.vue')
        },
        {
          path: 'order',
          name: '',
          component: () => import('@/pages/view/Order.vue'),
          children: [
            {
              path: '/',
              name: 'writeMessage',
              component: () => import('@/pages/view/order/writeMessage.vue')
            },

            {
              path: 'checkout/:id',
              name: 'Checkout',
              component: () => import('@/pages/view/order/Checkout.vue')
            },
            {
              path: 'order_end',
              name: 'orderEnd',
              component: () => import('@/pages/view/order/orderEnd.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/admin',
      name: '',
      component: () => import('@/admin/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('@/pages/admin/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('@/pages/admin/Order.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('@/pages/admin/Coupon.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon_list',
          name: 'CouponList',
          component: () => import('@/pages/admin/CouponList.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: () => import('@/pages/admin/Login.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
