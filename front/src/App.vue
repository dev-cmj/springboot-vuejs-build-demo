<script setup lang="ts">
import Splash from '@/components/Splash.vue'
import {isChecking} from "@/stores/authState.ts";
</script>

<template>
  <div id="app">
    <Splash v-if="isChecking"/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 1rem;
}

nav a {
  margin: 0 0.5rem;
  color: #42b983;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>
