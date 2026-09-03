import { createRouter, createWebHistory } from 'vue-router'
import CatalogoView from '../views/CatalogoView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import guiaEstilo from '../views/guiaEstilo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'catalogo', component: CatalogoView },
    { path: '/nosotros', name: 'nosotros', component: NosotrosView },
    { path: '/checkout', name: 'checkout', component: CheckoutView },
    { path: '/admin', name: 'adminLogin', component: AdminLoginView },
    { path: '/admin/dashboard', name: 'adminDashboard', component: AdminDashboardView },
    { path: '/guiaEstilo', name: 'guiaEstilo', component: guiaEstilo },
  ],
})

export default router
