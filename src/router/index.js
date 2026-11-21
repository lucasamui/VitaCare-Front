import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CidsList from '../views/cids/CidsList.vue'
import CidsForm from '../views/cids/CidsForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },

    { path: '/cids', component: CidsList },
    { path: '/cids/add', component: CidsForm },
    { path: '/cids/:id/edit', component: CidsForm },

  ],
})

export default router
