//import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
  ]
})
createApp(App)
.use(router)
.mount('#app')