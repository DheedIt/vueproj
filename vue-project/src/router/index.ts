import Home from '@/views/Home.vue'
import SecondPage from '@/views/SecondPage.vue'
import { h, type FunctionalComponent } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: SecondPage}
]

const AboutPage: FunctionalComponent = () => {
    return h('h1',{},'About')
}
AboutPage.displayName = 'AboutPage'


const router = createRouter({
  history: createWebHistory(), routes
  })
export default router