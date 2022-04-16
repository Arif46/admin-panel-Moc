const childRoutes = (prop) => [
  {
    path: 'login',
    name: prop + 'login',
    meta: { auth: true, name: 'Editable' },
    component: () => import('../pages/Login.vue')
  },
  {
    path: 'sign-up',
    name: prop + 'sign_up',
    meta: { auth: true, name: 'Editable' },
    component: () => import('../pages/SignUp.vue')
  }
]
const routes = [
  {
    path: '/auth-service/auth',
    name: 'auth_service.auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    // meta: { auth: true },
    children: childRoutes('auth_service.auth')
  }
]

export default routes
