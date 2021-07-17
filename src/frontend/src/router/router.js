import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/views/Orders'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile'),
    meta: { layout: 'MainLayout' }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
