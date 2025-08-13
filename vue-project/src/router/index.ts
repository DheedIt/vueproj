import Home from '@/views/Home.vue'
import Next from '@/views/Next.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/next', name: 'Next', component: Next }
]

const router = createRouter({
    history: createWebHistory(), routes
});

export default router