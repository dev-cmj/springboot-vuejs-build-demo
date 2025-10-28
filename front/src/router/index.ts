import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(), // SPA용 히스토리 모드
  routes
})

export default router
