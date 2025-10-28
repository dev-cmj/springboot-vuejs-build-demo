<!-- File: `front/src/views/Login.vue` -->
<template>
  <div class="login-page">
    <h2>로그인</h2>
    <form @submit.prevent="submit">
      <div>
        <label>아이디</label>
        <input v-model="username" />
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <button type="submit">로그인</button>
      </div>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref<string | null>(null)
const router = useRouter()

async function submit() {
  error.value = null
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    if (res.ok) {
      const data = await res.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        await router.push('/')
        return
      }
    }
    const body = await res.json().catch(() => ({}))
    error.value = body.message || '로그인 실패'
  } catch (e) {
    error.value = '네트워크 오류'
  }
}
</script>

<style scoped>
.login-page { padding: 1rem; max-width: 320px; }
input { width: 100%; margin: 0.25rem 0 0.75rem 0; }
</style>
