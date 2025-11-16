<template>
  <div class="relative overflow-visible h-16 w-full">
    <!-- Single row with 5 visible items -->
    <div class="flex items-center justify-center space-x-4">
      <UMarquee 
        name="client-spin" 
        tag="div" 
        class="flex items-center space-x-5"
      >
        <div
          v-for="client in allClients"
          :key="`${client.meta.name}-${client.id}`"
          class="flex-shrink-0 h-16 w-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <img
            :src="client.meta.logo"
            :alt="client.meta.name"
            :title="client.meta.name"
            class="max-w-full max-h-full object-contain filter  transition-all duration-300"
            loading="lazy"
          />
        </div>
      </UMarquee>
    </div>
  </div>
</template>

<script setup lang="ts">

// Fetch all clients from Nuxt Content
const { data: allClients } = await useAsyncData('clients', () => queryCollection('clients').all())

</script>

<style scoped>
.client-spin-enter-active,
.client-spin-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.client-spin-enter-from {
  opacity: 0;
  transform: translateY(100%) rotateX(90deg);
}

.client-spin-leave-to {
  opacity: 0;
  transform: translateY(-100%) rotateX(-90deg);
}

.client-spin-move {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhance 3D effect */
.client-spin-enter-active,
.client-spin-leave-active {
  transform-style: preserve-3d;
  perspective: 1000px;
}
</style>