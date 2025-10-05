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

  <!--- Pricing -->
  <section id="pricing" class="py-20 bg-gray-50 text-center">
    <h2 class="text-3xl font-bold text-brand mb-8">Pricing</h2>
    <div class="flex flex-col md:flex-row justify-center gap08 max-w-4xl mx-auto">
      <div class="p-8 bg-white shadow rounded-xl w-80 mr-4">
        <h3 class="text-xl font-semibold mb-4">One Bin</h3>
        <p class="text-gray-600 mb-6">$30</p>
      </div>
      <div class="p-8 bg-white shadow rounded-xl w-80 ml-4">
        <h3 class="text-xl font-semibold mb-4">Two Bins</h3>
        <p class="text-gray-600 mb-6">$45</p>
      </div>
    </div>
  </section>

  <!-- Review -->
<!--  <section id="reviews" class="py-20 bg-gray-50 text-center">-->
<!--    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">Reviews</h2>-->
<!--    <div class="max-w-3xl mx-auto space-y-8">-->
<!--      <blockquote class="bg-gray-50 p-6 rounded-xl shadow-md">-->
<!--        "Best service I've ever had!"-->
<!--        -Bron-->
<!--      </blockquote>-->
<!--      <blockquote class="bg-gray-50 p-6 rounded-xl shadow-md">"Bins smelled amazing afterward. Highly recommend!"</blockquote>-->
<!--    </div>-->
<!--  </section>-->

  <!-- About -->
  <section id="about" class="py-20 bg-white text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">About Us</h2>
    <div class="flex flex-col md:flex-row items-center md:items-start gap-6 px-10">
      <img
          src="@/assets/cartoonCleaning.PNG"
          alt="Cartoon cleaning garbage cans"
          class="w-full md:w-1/2 h-auto"
      />
      <div class="text-left text-lg md:text-xl text-gray-600 md:w-1/2 space-y-4">
        <p>
          Lumine USA is the East Valley’s trusted garbage bin cleaning service, offering fast,
          affordable, and eco-friendly trash can cleaning for homes and businesses. We specialize
          in pressure washing and sanitizing garbage bins, recycling cans, and compost
          containers—removing odors, bacteria, and pests right at your curb.
        </p>
        <p>
          Our professional bin cleaning system uses environmentally safe methods to leave your
          bins spotless and fresh, without the mess. Whether you’re looking for a one-time deep
          clean or a recurring monthly plan, Lumine USA makes it simple to keep your bins clean
          year-round.
        </p>
        <div>
          <p class="font-semibold mb-4">
            Proudly serving Mesa, Gilbert, Chandler, Queen Creek, and the entire East Valley, we provide:
          </p>
          <ul class="list-disc list-inside mt-2">
            <li>Curbside garbage bin cleaning</li>
            <li>Residential & commercial trash can sanitizing</li>
            <li>Odor and germ elimination</li>
            <li>Affordable recurring cleaning plans</li>
          </ul>
        </div>
        <p>
          Book online today with Lumine USA—the #1 choice for garbage bin cleaning in East Valley, Arizona.
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-brand text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-6">Meet The Founder</h2>
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
      <div class="text-lg md:text-xl text-gray-600 text-left">
        <img
            src="@/assets/branson.jpeg"
            alt="Founder"
            class="float-left w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mr-6 mb-4 border-4 border-gray-200"
        />

        <p>
          Hi, I’m <span class="font-semibold">Branson Workman</span>, founder of Lumine USA.
          I started this company with one simple goal: to make life easier and cleaner for families
          and businesses here in the East Valley.
        </p>

        <p>
          Like most people, I used to dread opening a garbage bin on a hot Arizona day—the smell,
          the bugs, the mess. I knew there had to be a better way. That’s why I created Lumine USA,
          a professional, eco-friendly garbage bin cleaning service that takes care of the dirty work
          so you don’t have to.
        </p>

        <p>
          I’m passionate about serving my community in Mesa, Gilbert, Chandler, and Queen Creek, and
          I take pride in delivering the kind of clean, fresh bins that make your home or business
          feel a little brighter.
        </p>

        <p>
          Most importantly, my life is centered on my faith in Jesus Christ. I believe He is the reason
          we have light, hope, and purpose. My goal with this business isn’t just to clean bins, it’s
          to serve my neighbors with honesty, integrity, and love, following the example of Christ.
        </p>

        <p>
          When I’m not out helping keep bins fresh, you’ll usually find me running, working out, or
          spending time with family and friends. But more than anything, I love building a business
          that makes a real difference right here at home.
        </p>

        <p>
          At Lumine USA, you’re not just another stop on the route—you’re a neighbor and someone I want
          to serve well.
        </p>

        <div class="clear-both"></div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-20 bg-gray-50 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-brand mb-6">Contact Us</h2>
    <p class="mb-4">Serving East Valley Arizona</p>
    <p class="text-lg md:text-xl text-gray-600">
      Email: <a href="mailto:Luminebins@gmail.com" class="text-brand">Luminebins@gmail.com</a>
    </p>
    <p class="text-lg md:text-xl text-gray-600">
      Phone: <a href="tel:6028811573" class="text-brand">(602) 881-1573</a>
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
