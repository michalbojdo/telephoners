import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/projects/:projectID',
      component: ProjectView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ],
})

export default router
