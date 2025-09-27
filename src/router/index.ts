import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

})

router.afterEach((to, _from) => {
    nextTick(() => {
        document.title = to.meta.title
            ? `${to.meta.title} | ${import.meta.env.VITE_APP_TITLE}`
            : import.meta.env.VITE_APP_TITLE
    })
})

export default router
