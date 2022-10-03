import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import CardView  from '../views/CardView.vue'
import SelfAssessment from '../views/SelfAssessment.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapView
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardView
    },
    {
      path: '/selfAss',
      name: 'selfAssessment',
      component: SelfAssessment
    },
  ]
})

export default router
