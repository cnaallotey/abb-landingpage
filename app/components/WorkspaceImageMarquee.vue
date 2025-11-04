<template>
  <section class="pb-16 bg-white dark:bg-gray-900 overflow-hidden">
    <UContainer>
      <div class="text-center mb-12">
       <AppHeadingTitle class="text-center">
          Experience Our <span>Workspace</span>
        </AppHeadingTitle>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Take a virtual tour through our modern, innovative workspace environments designed for productivity and collaboration.
        </p>
      </div>
    </UContainer>

    <!-- Marquee Container -->
    <div class="relative">
      <!-- First Row - Moving Right -->
      <div class="flex space-x-6 animate-marquee-right mb-6">
        <div 
          v-for="(image, index) in firstRowImages" 
          :key="`row1-${index}`"
          class="shrink-0"
        >
          <div class="w-80 h-48 rounded-lg overflow-hidden  transition-shadow duration-300">
            <NuxtImg
              :src="`/images/office-images/${image}`"
              :alt="`Workspace view ${index + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div 
          v-for="(image, index) in firstRowImages" 
          :key="`row1-dup-${index}`"
          class="shrink-0"
        >
          <div class="w-80 h-48 rounded-lg overflow-hidden transition-shadow duration-300">
            <NuxtImg
              :src="`/images/office-images/${image}`"
              :alt="`Workspace view ${index + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
      </div>

      <!-- Second Row - Moving Left -->
      <div class="flex space-x-6 animate-marquee-left">
        <div 
          v-for="(image, index) in secondRowImages" 
          :key="`row2-${index}`"
          class="shrink-0"
        >
          <div class="w-80 h-48 rounded-lg overflow-hidden transition-shadow duration-300">
            <NuxtImg
              :src="`/images/office-images/${image}`"
              :alt="`Workspace view ${index + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div 
          v-for="(image, index) in secondRowImages" 
          :key="`row2-dup-${index}`"
          class="shrink-0"
        >
          <div class="w-80 h-48 rounded-lg overflow-hidden transition-shadow duration-300">
            <NuxtImg
              :src="`/images/office-images/${image}`"
              :alt="`Workspace view ${index + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
      </div>

      <!-- Gradient Overlays for fade effect -->
      <div class="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent dark:from-gray-900 pointer-events-none z-10" />
      <div class="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent dark:from-gray-900 pointer-events-none z-10" />
    </div>
  </section>
</template>

<script setup lang="ts">
// Select a subset of the office images for the marquee
const allImages = [
  '4Y9A8803.jpg', '4Y9A8804.jpg', '4Y9A8807.jpg', '4Y9A8808.jpg', '4Y9A8809.jpg',
  '4Y9A8810.jpg', '4Y9A8811.jpg', '4Y9A8813.jpg', '4Y9A8814.jpg', '4Y9A8816.jpg',
  '4Y9A8817.jpg', '4Y9A8818.jpg', '4Y9A8823.jpg', '4Y9A8826.jpg', '4Y9A8828.jpg',
  '4Y9A8829.jpg', '4Y9A8830.jpg', '4Y9A8832.jpg', '4Y9A8845.jpg', '4Y9A8846.jpg',
  '4Y9A8848.jpg', '4Y9A8850.jpg', '4Y9A8853.jpg', '4Y9A8855.jpg', '4Y9A8856.jpg',
  '4Y9A8858.jpg', '4Y9A8860.jpg', '4Y9A8861.jpg', '4Y9A8864.jpg', '4Y9A8867.jpg',
  '4Y9A9036.jpg', '4Y9A9039.jpg', '4Y9A9040.jpg', '4Y9A9041.jpg', '4Y9A9042.jpg',
  '4Y9A9043.jpg', '4Y9A9046.jpg', '4Y9A9053.jpg', '4Y9A9056.jpg', '4Y9A9057.jpg',
  '1761083099198.jpg', '1761083245560.jpg', '1761083316161.jpg', '1761083359913.jpg', '1761083403003.jpg'
]

// Split images into two rows for opposite direction movement
const firstRowImages = computed(() => allImages.slice(0, Math.ceil(allImages.length / 2)))
const secondRowImages = computed(() => allImages.slice(Math.ceil(allImages.length / 2)))
</script>

<style scoped>
/* Marquee animations */
@keyframes marquee-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee-right {
  animation: marquee-right 40s linear infinite;
  will-change: transform;
}

.animate-marquee-left {
  animation: marquee-left 40s linear infinite;
  will-change: transform;
}

/* Pause animation on hover for better UX */
.animate-marquee-right:hover,
.animate-marquee-left:hover {
  animation-play-state: paused;
}

/* Ensure smooth performance */
.animate-marquee-right,
.animate-marquee-left {
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>