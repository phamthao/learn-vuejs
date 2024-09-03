const UserRoutes = [
    {
        name: 'users',
        path: '/users',
        component: () => import('@/components/pages/users/UserList.vue'),
        meta: { title: 'Quản lý users' },
        props: (route) => ({ page: route.query.page })
    },
    {
        name: 'user-add',
        path: '/users/add',
        component: () => import('@/components/pages/users/UserSetting.vue'),
        meta: { title: 'Thêm mới user' }
    },
    {
        name: 'user-edit',
        path: '/users/:id/edit',
        props: true,
        component: () => import('@/components/pages/users/UserSetting.vue'),
        meta: { title: 'Chỉnh sửa user' }
    }
]

export default UserRoutes
