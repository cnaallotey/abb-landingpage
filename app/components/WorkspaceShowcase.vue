<template>
  <section id="showcase" class="bg-black py-20">
    <UContainer class="max-w-screen-2xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <AppHeadingTitle class="text-white">
          {{ showcaseData?.title || 'See our Spaces' }}
        </AppHeadingTitle>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          {{ showcaseData?.description || 'Explore our thoughtfully designed workspace environments that inspire creativity and productivity.' }}
        </p>
      </div>

      <!-- Spaces Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="space in (showcaseData?.spaces || defaultSpaces)" 
          :key="space.title"
          class="text-center"
        >
          <!-- Space Image Placeholder -->
          <div class="aspect-square bg-gray-200 red:bg-gray-700 rounded-lg mb-6">
            <!-- Placeholder for space image -->
          </div>
          
          <!-- Space Content -->
          <h3 class="text-xl font-semibold text-white mb-3">
            {{ space.title }}
          </h3>
          <p class="text-white ">
            {{ space.description }}
          </p>
        </div>
      </div>

    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Fetch showcase content from Nuxt Content using the new API
const { data: showcaseData } = await useAsyncData('showcase', () => queryCollection('showcase').first())

// Default fallback data
const defaultSpaces = [
  {
    title: 'Open Workspace',
    description: 'Collaborative areas designed for team interaction and creative brainstorming sessions.'
  },
  {
    title: 'Private Offices',
    description: 'Quiet, dedicated spaces for focused work and confidential meetings.'
  },
  {
    title: 'Meeting Rooms',
    description: 'Professional conference rooms equipped with the latest presentation technology.'
  }
]
</script>