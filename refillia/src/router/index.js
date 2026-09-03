import { createRouter, createWebHistory } from 'vue-router'
import inventario from '../views/inventario.vue'
import login from '../views/login.vue'
import vendedor from '../views/vendedor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inventario',
      name: 'inventario',
      component: inventario,
    },
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/vendedor',
      name: 'vendedor',
      component: vendedor,
    }
  ],
})

export default router
