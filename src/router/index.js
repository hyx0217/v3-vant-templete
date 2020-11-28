import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login */ '@/views/Login'),
  },
  {
    path: '/sku',
    name: 'sku',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Sku'),
  },
  {
    path: '',
    redirect: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
