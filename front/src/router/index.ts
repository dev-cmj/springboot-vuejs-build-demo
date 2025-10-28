import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import {setChecking} from "@/stores/authState.ts";

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(), // SPA용 히스토리 모드
  routes
})

async function ensureMinDelay(start: number, minMs: number) {
  const elapsed = Date.now() - start
  if (elapsed < minMs) await new Promise(r => setTimeout(r, minMs - elapsed))
}

router.beforeEach(async (to, from, next) => {

  const token = localStorage.getItem('token')

  if (to.name === 'Login') {
    if (token) {
      return next({ name: 'Home' })
    }
    return next()
  }

  if (!token) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
    return
  }

  const minDelay = 500 // 최소 표시 시간(ms)
  const start = Date.now()
  setChecking(true)
  await ensureMinDelay(start, minDelay)
  setChecking(false)
  next()
})

export default router
