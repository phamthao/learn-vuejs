import { createWebHistory, createRouter } from 'vue-router'
import LoginRoutes from './LoginRoutes'
import HomeRoutes from './HomeRoutes'
import UserRoutes from './UserRoutes'

const routes = [...LoginRoutes, ...HomeRoutes, ...UserRoutes]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title'
    document.title = title
    next()
})

export default router
