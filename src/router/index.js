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
    // Check if user is logged in
    const publicPages = ['/', '/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        next('/login');
    } else if (loggedIn && to.path === '/login') {
        next('/');
    } else {
        // Set page title
        const title = to.meta.title || 'Default Title'
        document.title = title
        next();
    }
});

export default router
