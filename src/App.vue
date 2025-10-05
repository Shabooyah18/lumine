<script setup lang="ts">
import ConfirmPopup from 'primevue/confirmpopup'
import Toast from 'primevue/toast'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <Toast />
    <ConfirmPopup class="shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]" />
    <AppHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>
<style scoped>
html {
  scroll-padding-top: 80px;
}
</style>