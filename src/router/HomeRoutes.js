const HomeRoutes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/components/pages/HomePage.vue'),
    meta: { title: 'Trang Chủ' }
  }
]

export default HomeRoutes
