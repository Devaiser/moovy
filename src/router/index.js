import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AgreementsView from '../views/AgreementsView.vue';
import PageNotFound from '../views/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/agreements',
      name: 'agreements',
      component: AgreementsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});

export default router;
