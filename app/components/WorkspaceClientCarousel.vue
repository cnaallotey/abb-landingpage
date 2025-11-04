<template>
  <div class="relative overflow-hidden w-full py-8">
    <!-- Marquee Container -->
    <div class="flex marquee-container">
      <!-- First set of logos -->
      <div class="flex items-center gap-12 marquee-content">
        <div
          v-for="(client, index) in allClients"
          :key="`${client.meta.name}-${index}`"
          class="shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <NuxtImg
            :src="client.meta.logo"
            :alt="client.meta.name"
            :title="client.meta.name"
            class="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- Duplicate set for seamless loop -->
      <div class="flex items-center gap-12 marquee-content" aria-hidden="true">
        <div
          v-for="(client, index) in allClients"
          :key="`${client.meta.name}-duplicate-${index}`"
          class="shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <NuxtImg
            :src="client.meta.logo"
            :alt="client.meta.name"
            :title="client.meta.name"
            class="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Fetch all clients from Nuxt Content
const { data: allClients } = await useAsyncData('clients', () => queryCollection('clients').all())
</script>

<style scoped>
.marquee-container {
  animation: marquee 30s linear infinite;
}

.marquee-container:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Fade effect at edges */
.relative::before,
.relative::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.relative::before {
  left: 0;
  background: linear-gradient(to right, transparent, transparent);
}

.relative::after {
  right: 0;
  background: linear-gradient(to left, transparent, transparent);
}
</style>