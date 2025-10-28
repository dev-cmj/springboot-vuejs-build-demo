<script setup lang="ts"></script>

<template>
  <div id="app">
    <header>
      <h1>라우팅 테스트</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app { font-family: Arial, sans-serif; padding: 1rem; }
nav a { margin: 0 0.5rem; color: #42b983; text-decoration: none; }
nav a.router-link-active { font-weight: bold; }
</style>
