<script setup lang="ts">
import Button from 'primevue/button';
import {ref} from "vue";
const serviceDialog = ref(false);
</script>

<template>
  <section id="hero" class="relative text-center py-56 bg-gray-50">
    <div class="absolute inset-0 flex">
      <img src="@/assets/before.jpeg" alt="Before" class="w-1/2 h-full object-cover" />
      <img src="@/assets/after.jpeg" alt="After" class="w-1/2 h-full object-cover" />
    </div>
    <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 text-white px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold text-brand mb-4 drop-shadow-lg">
          The Brightness of Clean Living
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-6 drop-shadow">
          Starting with your trash bins.
        </p>
        <Button class="bg-brand submit-btn" @click="serviceDialog = true" label="Request A Service" />
      </div>
  </section>

  <!-- How It Works -->
  <section id="how" class="py-20 bg-white text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">How It Works</h2>
    <div class="grid md:grid-cols-3 gap-10">
      <div class="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 class="font-semibold text-xl md:text-2xl mb-4">1. We Arrive</h3>
        <p>Leave your bins outside on cleaning day.</p>
      </div>
      <div class="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 class="font-semibold text-xl md:text-2xl mb-4">2. We Clean</h3>
        <p>We clean your bins and put them back in their proper place.</p>
      </div>
      <div class="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 class="font-semibold text-xl md:text-2xl mb-4">3. You Enjoy</h3>
        <p>Enjoy your new, clean bins.</p>
      </div>
    </div>
  </section>

  <!--- Pricing -->
  <section id="pricing" class="py-20 bg-gray-50 text-center">
    <h2 class="text-3xl font-bold text-brand mb-8">Pricing</h2>
    <div class="flex flex-col md:flex-row justify-center gap08 max-w-4xl mx-auto">
      <div class="p-8 bg-white shadow rounded-xl w-80">
        <h3 class="text-xl font-semibold mb-4">One-time Cleaning</h3>
        <p class="text-gray-600 mb-6">$$$</p>
      </div>
    </div>
  </section>

  <!-- Review -->
  <section id="reviews" class="py-20 bg-white text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">Reviews</h2>
    <div class="max-w-3xl mx-auto space-y-8">
      <!-- reviews here -->
    </div>
  </section>

  <!-- About -->
  <section id="about" class="py-20 bg-gray-50 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">About Us</h2>
    <p class="text-lg md:text-xl text-gray-600">
      Bio placeholder
    </p>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-20 bg-white text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">Contact Us</h2>
    <p class="mb-4">Serving Utah County</p>
    <p class="text-lg md:text-xl text-gray-600">
      Email: <a href="mailto:email" class="text-brand">bransonemail@lumine.com</a>
    </p>
    <p class="text-lg md:text-xl text-gray-600">
      Phone: <a href="tel:1234567890" class="text-brand">(123) 456-7890</a>
    </p>
  </section>

  <!-- Footer -->
  <footer class="bg-brand text-white py-4 text-center">
    <p>&copy: 2025 Lumine. All rights reserved.</p>
  </footer>

  <RequestService v-model="serviceDialog" />
</template>

<style scoped>
.submit-btn:hover {
  background-color: #007AC2;
}
</style>
