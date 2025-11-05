<template>
  <header class="bg-white  red:bg-gray-900 border-b border-gray-200 red:border-gray-700 sticky top-0 z-50">
    <UContainer class="max-w-screen-2xl mx-auto py-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class=" flex items-center justify-center">
            <img src="/images/ABB-logo.png" class="h-10 md:h-16 w-auto shrink-0" alt="logo">
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center space-x-6 2xl:space-x-12">
          <NuxtLink
            v-for="link in navigation"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 py-3 px-5 rounded-full border border-slate-300 red:text-gray-300 hover:text-red-600 red:hover:text-red-400 font-medium transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <div class="py-4 px-7 hidden md:inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-black text-red-500  focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
           <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,48a78.61,78.61,0,0,1,56,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144,80c16.52,4.42,27.58,15.48,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
           0302970752 / 0302907459
        </div>
          <NuxtLink to="/#services" class="py-4 px-7 hidden md:inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-[#dc2626] text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Book a Space Now
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </NuxtLink>
          <UButton
            variant="ghost"
            size="xl"
            :icon="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="xl:hidden text-red-500 hover:bg-red-100"
            color="red"
            @click="isMenuOpen = !isMenuOpen"
          />
        </div>
      </div>
    </UContainer>
<pre></pre>
    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="xl:hidden bg-white red:bg-gray-900 border-t border-gray-200 red:border-gray-700"
    >
      <UContainer>
        <div class="py-4 space-y-2">
          <NuxtLink
            v-for="link in navigation"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-2 text-gray-700 red:text-gray-300 hover:text-red-600 red:hover:text-red-400 font-medium transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="px-4 pt-2 md:hidden">
            <div class="py-2 px-7 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-black text-red-500  focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
           <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,48a78.61,78.61,0,0,1,56,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144,80c16.52,4.42,27.58,15.48,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
           0302970752 / 0302907459
        </div><br>
          <a class="py-2 px-7 mt-3 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-[#dc2626] text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Book a Space Now
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
          </div>
        </div>
      </UContainer>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navigation = [
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/#locations', label: 'Locations' },
  { to: '/#benefits', label: 'Benefits' },
  { to: '/#contact', label: 'Contact' }
]

// Close menu when route changes
watch(() => useRoute().path, () => {
  isMenuOpen.value = false
})
</script>