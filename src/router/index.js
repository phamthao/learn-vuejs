import { createWebHistory, createRouter } from 'vue-router'
import LoginRoutes from './routes/LoginRoutes'
import HomeRoutes from './routes/HomeRoutes'
import UserRoutes from './routes/UserRoutes'

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
