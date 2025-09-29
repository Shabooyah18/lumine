import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            const el = document.querySelector(to.hash)
            if (el) {
                const header = document.querySelector('header')
                const headerHeight = header ? header.getBoundingClientRect().height : 0
                const y = window.scrollY + el.getBoundingClientRect().top - headerHeight - 8

                return {
                    left: 0,
                    top: y,
                    behavior: 'smooth',
                }
            }
        }
        return { top: 0 }
    }
})

router.afterEach((to, _from) => {
    nextTick(() => {
        document.title = to.meta.title
            ? `${to.meta.title} | ${import.meta.env.VITE_APP_TITLE}`
            : import.meta.env.VITE_APP_TITLE
    })
})

export default router
