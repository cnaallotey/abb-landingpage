<template>
  <section class="py-20 bg-white" v-if="storyData?.storyTimeline?.length">
    <UContainer>
      <!-- Header -->
      <div class="mb-16 md:mb-24">
        <h4 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">{{ storyData.preHeader || 'COMPANY HISTORY' }}</h4>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 max-w-xl leading-tight">
          {{ storyData.title || 'Meet with our happy type journey' }}
        </h2>
      </div>

      <!-- Timeline Items -->
      <div class="space-y-12 md:space-y-24">
        <div 
          v-for="(item, index) in storyData.storyTimeline" 
          :key="item.id || index"
          class="sticky top-24 md:top-32 bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500"
          :style="{ zIndex: index + 1 }"
        >
          <div class="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px]">
             <!-- Content Side -->
            <div class="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div class="text-6xl md:text-7xl font-bold text-slate-800 mb-4 tracking-tighter">
                {{ item.year }}
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-slate-700 mb-6">
                {{ item.title }}
              </h3>
              <div class="text-gray-600 leading-relaxed text-lg" v-if="item.description">
                 {{ item.description }}
              </div>
            </div>

            <!-- Image Side -->
            <div class="lg:w-1/2 h-64 lg:h-full relative overflow-hidden bg-gray-200">
               <NuxtImg
                  :src="item.image?.url || `/images/story/${item.year}.png`"
                  :alt="item.title"
                  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  placeholder
                />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: storyData } = await useAsyncData('home-about-section', () => 
  queryCollection('home_about_sections').first()
)
</script>

<style scoped>
/* Optional: Add smooth scrolling behavior if needed */
</style>
