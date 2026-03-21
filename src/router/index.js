import { createRouter, createWebHistory } from 'vue-router'
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import { isRouteUnlocked, lockedRedirectPath } from '@/config/courseAccess'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SidebarLayout,
      redirect: '/bienvenida',
      children: [
        {
          path: 'bienvenida',
          name: 'bienvenida',
          component: () => import('@/views/BienvenidaView.vue'),
        },
        {
          path: 'semana-1',
          name: 'semana-1',
          component: () => import('@/views/semanas/Semana1View.vue'),
        },
        {
          path: 'semana-2',
          name: 'semana-2',
          redirect: { name: 'semana-1' },
        },
        {
          path: 'semana-3',
          name: 'semana-3',
          component: () => import('@/views/semanas/Semana3View.vue'),
        },
        {
          path: 'semana-4',
          name: 'semana-4',
          component: () => import('@/views/semanas/Semana4View.vue'),
        },
        {
          path: 'semana-5',
          name: 'semana-5',
          component: () => import('@/views/semanas/Semana5View.vue'),
        },
        {
          path: 'semana-6',
          name: 'semana-6',
          component: () => import('@/views/semanas/Semana6View.vue'),
        },
        {
          path: 'semana-7',
          name: 'semana-7',
          component: () => import('@/views/semanas/Semana7View.vue'),
        },
        {
          path: 'semana-8',
          name: 'semana-8',
          component: () => import('@/views/semanas/Semana8View.vue'),
        },
        {
          path: 'semana-9',
          name: 'semana-9',
          component: () => import('@/views/semanas/Semana9View.vue'),
        },
        {
          path: 'semana-10',
          name: 'semana-10',
          component: () => import('@/views/semanas/Semana10View.vue'),
        },
        {
          path: 'certificado',
          name: 'certificado',
          component: () => import('@/views/CertificadoView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  if (to.path === '/') {
    return true
  }

  if (isRouteUnlocked(to.path)) {
    return true
  }

  return { path: lockedRedirectPath }
})

export default router
