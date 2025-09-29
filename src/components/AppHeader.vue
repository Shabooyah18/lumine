<template>
  <header class="header">
    <RouterLink to="/#hero" class="logo-link">
      <img :src="longLogo" alt="Description" width="170" />
    </RouterLink>
    <nav class="nav">
    <RouterLink to="/#how">How It Works</RouterLink>
    <RouterLink to="/#pricing">Pricing</RouterLink>
    <RouterLink to="/#reviews">Reviews</RouterLink>
    <RouterLink to="/#about">About</RouterLink>
    <RouterLink to="/#contact">Contact</RouterLink>
    </nav>

    <Button class="cta-btn" @click="serviceDialog = true">Request A Service</Button>

    <RequestService v-model="serviceDialog" />
  </header>
</template>

<script setup>
import longLogo from '@/assets/long_logo.jpeg';
import Button from 'primevue/button';
import {ref} from "vue";

const serviceDialog = ref(false);
</script>

<style scoped>
.header {
  position: sticky; /* can also use 'fixed' if you want it always visible */
  top: 0;
  width: 100%;
  background-color: white;
  color: white;
  display: flex;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.nav a {
  color: #009CFF;
  text-decoration: none;
  margin-left: 15px;
}

.nav a:hover {
  text-decoration: underline;
}

.cta-btn {
  background-color: #009CFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 30px;
}

.cta-btn:hover {
  background-color: #007AC2;
}

.logo-link {
  user-select: none;
}
</style>
