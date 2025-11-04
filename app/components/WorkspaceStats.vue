<template>
  <section class="bg-black dark:bg-gray-800 py-10 lg:py-40">
    <UContainer class="max-w-screen-2xl relative">
      <div class="flex flex-col lg:flex-row gap-5 md:gap-12 items-center">
        <!-- Left Image -->
        <div class="lg:w-[80%] shrink-0">
          <div class="aspect-3/2  bg-gray-300 dark:bg-gray-600 rounded-3xl overflow-hidden">
            <NuxtImg
              src="/images/office2.jpg"
              alt="statsData.image.alt"
              class="w-full h-full object-cover"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
        
        <!-- Right Content -->
        <div class="lg:w-1/2 shrink-0 lg:absolute lg:top-1/2 lg:right-0 transform lg:-translate-y-1/2 z-10 text-slate-900 bg-white p-4 md:p-12 rounded-3xl ">
          <AppHeadingTitle>
          {{ statsData?.title || 'Find the Perfect Space for Productivity' }}
          </AppHeadingTitle>
          <p class="text-lg text-gray-500 mb-8">
            {{ statsData?.description || 'Our workspace solutions are designed to enhance collaboration and boost productivity for teams of all sizes.' }}
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div 
              v-for="stat in (statsData?.stats || defaultStats)" 
              :key="stat.label"
              class="text-center"
            >
              <div class="text-5xl font-black text-red-600">{{ stat.value }}</div>
              <div class="text-sm text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
          
          <!-- CTA Button -->
         <AppPrimaryButton>
            {{ statsData?.cta?.text || 'Explore Our Spaces' }}
          </AppPrimaryButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Fetch stats content from Nuxt Content using the new API
const { data: statsData } = await useAsyncData('stats', () => queryCollection('stats').first())

// Default fallback data
const defaultStats = [
  { label: 'Meeting Rooms', value: '24+' },
  { label: 'Members', value: '2k+' },
  { label: 'Projects', value: '3k+' },
  { label: 'Locations', value: '24+' }
]
</script>