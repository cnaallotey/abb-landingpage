<template>
  <section id="benefits" class="py-20 bg-red-600 redbg-gray-800">
    <UContainer class="max-w-screen-2xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <AppHeadingTitle class="text-center text-white">
          {{ benefitsData?.meta.title || 'Membership Benefits' }}
        </AppHeadingTitle>
        <p class="text-lg text-white max-w-2xl mx-auto">
          {{ benefitsData?.meta.description || 'Unlock exclusive perks and amenities designed to enhance your work experience.' }}
        </p>
        </div>
      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <UCard v-for="benefit in (benefitsData?.meta.benefits || defaultBenefits)" :key="benefit.title" class="rounded-3xl">
                <template #header>
                  <div class="flex items-center gap-3">
                    <UIcon :name="benefit.icon" size="2xl" class="text-red-500 text-xl size-10" />
                    <h4 class="text-lg font-bold text-gray-900 redtext-white">{{ benefit.title }}</h4>
                  </div>
                </template>
                
                <div class="space-y-4">
                  <p class="text-sm text-gray-600 redtext-gray-400">{{ benefit.description }}</p>
                  
                  
                </div>
              </UCard>
      </div>

      
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Fetch benefits content from Nuxt Content using the new API
const { data: benefitsData } = await useAsyncData('benefits', () => queryCollection('benefits').first())

// Default fallback data
const defaultBenefits = [
  {
    title: '24/7 Access',
    description: 'Work on your schedule with round-the-clock access to all facilities and amenities.',
    icon: 'i-heroicons-clock'
  },
  {
    title: 'High-Speed WiFi',
    description: 'Stay connected with enterprise-grade internet and redundant backup connections.',
    icon: 'i-heroicons-wifi'
  },
  {
    title: 'Meeting Rooms',
    description: 'Book professional meeting spaces equipped with the latest presentation technology.',
    icon: 'i-heroicons-presentation-chart-line'
  },
  {
    title: 'Networking Events',
    description: 'Connect with like-minded professionals through regular community events and workshops.',
    icon: 'i-heroicons-users'
  },
  {
    title: 'Premium Coffee',
    description: 'Fuel your productivity with unlimited access to specialty coffee and refreshments.',
    icon: 'i-heroicons-cup'
  },
  {
    title: 'Flexible Plans',
    description: 'Choose from daily, monthly, or annual membership options that fit your needs.',
    icon: 'i-heroicons-adjustments-horizontal'
  }
]
</script>