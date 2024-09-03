const LoginRoutes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/components/pages/LoginPage.vue'),
        meta: { title: 'Đăng nhập' }
    }
]

export default LoginRoutes
