const childRoutes = (prop) => [
  {
    path: 'template-one',
    name: prop + 'template_one',
    meta: { auth: true, name: 'Editable' },
    component: () => import('../pages/template-one/List.vue')
  },
  {
    path: 'template-two',
    name: prop + 'template_two',
    meta: { auth: true, name: 'Editable' },
    component: () => import('../pages/template-two/List.vue')
  }
]
const routes = [
  {
    path: '/designer-service/configuration',
    name: 'common_service.configuration',
    component: () => import('@/layouts/MainLayout.vue'),
    // meta: { auth: true },
    children: childRoutes('common_service.configuration')
  }
]

export default routes
