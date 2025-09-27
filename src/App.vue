<script setup lang="ts">
import ConfirmPopup from 'primevue/confirmpopup'
import Toast from 'primevue/toast'
import { RouterView } from 'vue-router'
</script>

<template>
    <Toast />
    <ConfirmPopup class="shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]" />
    <div class="flex min-h-svh flex-col">
        <main class="container flex grow flex-col gap-4 pb-24 pt-12">
            <RouterView />
        </main>
    </div>
</template>
