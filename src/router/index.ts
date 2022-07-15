import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import WatchView from '../views/WatchView.vue';
import RefView from '../views/RefView.vue';
import ComponentView from '../views/CmptView.vue';
import ProvideView from '../views/ProvideView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/watch',
      name: 'watch',
      component: WatchView
    },
    {
      path: '/ref',
      name: 'ref',
      component: RefView
    },
    {
      path: '/provide',
      name: 'provide',
      component: ProvideView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
