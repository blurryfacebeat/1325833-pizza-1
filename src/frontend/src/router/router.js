import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: 'IndexView' */ '@/views/Index.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: 'Login' */ '@/views/Login')
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: 'Cart' */ '@/views/Cart'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: 'Orders' */ '@/views/Orders'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: 'Profile' */ '@/views/Profile'),
    meta: { layout: 'MainLayout' }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
