import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
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
