<template>
  <section class="bg-gradient-to-t from-white via-white to-white dark:bg-gray-900 pt-10 md:pt-16">
    <UContainer class="max-w-screen-2xl relative z-10">
      <div class="relative overflow-hidden">
     <div class="max-w-screen-2xl mx-auto">
    <div class="max-w-7xl text-center mx-auto">
      <h1 class="block text-5xl max-w-6xl mx-auto font-bold text-gray-800 sm:text-6xl md:text-8xl dark:text-white">{{ heroData?.meta.title || 'Transform your work experience with ABB\'s state-of-the-art workspace solutions designed for innovation, collaboration, and success.' }}</h1>
      <p class="mt-5 text-xl max-w-4xl mx-auto text-gray-800 dark:text-neutral-400">{{ heroData?.meta.subtitle || 'Build your business here. Take it anywhere.' }}</p>
      <div class="mt-7 flex flex-col md:flex-row justify-center gap-3 w-full sm:inline-flex">
        <NuxtLink to="/#services" class="py-4 px-7 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-[#dc2626] text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Book a Space Now
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </NuxtLink>
        <NuxtLink to="/#locations" class="py-4 px-7 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-gray-200 bg-white text-[#dc2626] shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
          Explore our Spaces
        </NuxtLink>
      </div>
    </div>
    <!-- Hero Image -->
      <div class="mt-16">
        <div class="aspect-2/1 bg-red-600 md:border-14 border-red-600 rounded-3xl mx-auto max-w-full overflow-hidden">
        <div style="position:relative;aspect-ratio:16/9; border-radius:1rem; overflow:hidden;">
      <iframe 
            loading="lazy" title="Gumlet video player"
            src="https://play.gumlet.io/embed/6909c55e9940b0c5ad2e420e?background=true&autoplay=true&loop=true&disableControls=true"
            style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
          </iframe>
    </div>
        </div>
      </div>
  </div>
</div>
    </UContainer>
    <div class=" bg-red-600 w-full h-60 md:h-[400px] -mt-32 md:-mt-80" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
// Fetch hero content from Nuxt Content
const { data: heroData } = await useAsyncData('hero', () => queryCollection('hero').first())
</script>