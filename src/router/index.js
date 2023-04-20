import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about/cars',
      name: 'cars',
      component: () => import('../views/CarsView.vue'),
    },
    {
      path: '/about/avatars',
      name: 'avatars',
      component: () => import('../views/AvatarsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/agreements',
      name: 'agreements',
      component: () => import('../views/AgreementsView.vue'),
    },
    {
      path: '/ambassadors',
      name: 'ambassadors',
      component: () => import('../views/AffiliateProgramView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('../views/PageNotFound.vue'),
    },
  ],
});

export default router;
