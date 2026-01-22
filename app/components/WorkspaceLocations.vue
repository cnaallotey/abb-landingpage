<script setup>
const { data: locations } = await useAsyncData('locations', () => queryCollection('locations').all())
</script>

<template>
        <!-- Locations Preview -->
    <section class="bg-white pt-20 md:pt-32">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-16 max-w-2xl animate-on-scroll">
          <h2 class="mb-4 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our <span class="text-[#E60000]">Locations</span>
          </h2>
          <p class="text-xl text-gray-500 leading-relaxed">
            Strategically located workspaces designed to enhance productivity and collaboration. Choose the location that suits your business needs.
          </p>
        </div>
        
        <div class="flex flex-col gap-12 animate-on-scroll delay-100">
          <LocationListItem 
            v-for="location in locations" 
            :key="location.slug" 
            v-bind="location"
          />
        </div>
      </div>
    </section>
</template>
