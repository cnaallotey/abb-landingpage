<template>
  <UPageCTA
    :title="ctaData?.meta?.title || 'Ready to Experience the Future of Work?'"
    :description="ctaData?.meta?.description || 'Join leading teams who have transformed their productivity and innovation capabilities with ABB\'s workspace solutions.'"
    align="center"
    :ui="{title: 'text-white', description: '!text-white/90'}"
    class="bg-linear-to-r from-red-600 to-red-700 !text-white py-16"
  >
    <template #default>
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <UButton 
          size="xl" 
          color="white" 
          variant="solid"
          :icon="ctaData?.meta?.buttons?.primary?.icon || 'i-heroicons-calendar-days'"
          :to="ctaData?.buttons?.primary?.url || '/book'"
          class="text-red-600 bg-black px-10 inline-flex justify-center items-center py-4 text-base rounded-full"
        >
          {{ ctaData?.meta?.buttons?.primary?.text || 'Book Your Space Now' }}
        </UButton>
        <UButton 
          size="xl" 
          class="bg-white rounded-full py-4 px-10 text-red-600"
          color="white" 
          variant="outline"
          :icon="ctaData?.meta?.buttons?.secondary?.icon || 'i-heroicons-phone'"
          :to="ctaData?.meta?.buttons?.secondary?.url || '/contact'"
        >
          {{ ctaData?.meta?.buttons?.secondary?.text || 'Schedule a Consultation' }}
        </UButton>
      </div>
    </template>
    <template #bottom>
      <!-- Location Selection -->
      <div class="w-fit md:mx-auto bg-white/50 flex items-center gap-6 rounded-full p-4 mx-4 mb-8">
        <UButton 
          size="xl" 
          :class="[
            'rounded-full py-4 px-10 transition-all duration-300',
            selectedLocation === 'airport' 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-red-600'
          ]"
          color="white" 
          variant="outline"
          @click="selectLocation('airport')"
        >
          Airport Branch
        </UButton>
        <UButton 
          size="xl" 
          :class="[
            'rounded-full py-4 px-10 transition-all duration-300',
            selectedLocation === 'tema' 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-red-600'
          ]"
          color="white" 
          variant="outline"
          @click="selectLocation('tema')"
        >
          Tema Branch
        </UButton>
      </div>

      <!-- Dynamic Contact Information -->
      <div class="mt-12 bg-white/10 max-w-screen-2xl mx-auto backdrop-blur-sm rounded-2xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="space-y-2">
            <UIcon name="i-heroicons-map-pin" class="w-8 h-8 mx-auto text-white/80" />
            <h4 class="font-semibold text-2xl">Visit Us</h4>
            <p class="text-white/80 text-sm">
              {{ selectedLocationData?.meta?.title || 'ABB Technology Center' }}<br>
              {{ selectedLocationData?.meta?.address?.street || 'Affolternstrasse 44' }}<br>
              {{ selectedLocationData?.meta?.address?.city || 'Zurich' }}, {{ selectedLocationData?.meta?.address?.country || 'Switzerland' }}
            </p>
          </div>
          
          <div class="space-y-2">
            <UIcon name="i-heroicons-clock" class="w-8 h-8 mx-auto text-white/80" />
            <h4 class="font-semibold text-2xl">Operating Hours</h4>
            <p class="text-white/80 text-sm">
              {{ selectedLocationData?.meta?.operating_hours?.weekdays || 'Monday - Friday: 6:00 AM - 10:00 PM' }}<br>
              {{ selectedLocationData?.meta?.operating_hours?.weekends || 'Saturday - Sunday: 8:00 AM - 8:00 PM' }}<br>
              {{ selectedLocationData?.meta?.operating_hours?.access || '24/7 access available for members' }}
            </p>
          </div>
          <div class="space-y-2">
            <UIcon name="i-heroicons-envelope" class="w-8 h-8 mx-auto text-white/80" />
            <h4 class="font-semibold text-2xl">Get in Touch</h4>
            <p class="text-white/80 text-sm">
              {{ selectedLocationData?.meta?.contact?.email || 'workspace@abb.com' }}<br>
              {{ selectedLocationData?.meta?.contact?.phone || '+41 43 317 71 11' }}<br>
              {{ selectedLocationData?.meta?.contact?.whatsapp ? 'WhatsApp available' : 'Chat support available' }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Location Image -->
      <NuxtImg 
        :src="selectedLocationData?.meta?.image || '/images/office/tema.jpg'" 
        :alt="`${selectedLocationData?.meta?.title || 'Workspace'} Background`" 
        class="bg-white/10 max-w-screen-2xl object-center w-full px-4 object-cover mx-auto backdrop-blur-sm rounded-2xl aspect-3/1 mt-10"
        lazyload
      />
      <!-- Quick Benefits -->
      <div class="mt-8 grid max-w-screen-2xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="benefit in quickBenefits"
          :key="benefit.title"
          class="text-center space-y-2"
        >
          <UIcon :name="benefit.icon" class="w-6 h-6 mx-auto text-white/80" />
          <h5 class="font-medium text-xl">{{ benefit.title }}</h5>
          <p class="text-xs text-white/70">{{ benefit.description }}</p>
        </div>
      </div>


      <!-- Clients -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
    <h2 class="text-xl font-semibold md:text-2xl md:leading-tight text-white dark:text-neutral-200">Trusted by Ghana's top Productive companies</h2>
  </div>
  <!-- End Title -->

  <WorkspaceClientCarousel />
  <!-- End Grid -->
</div>
<!-- End Clients -->
    </template>
  </UPageCTA>
</template>

<script setup lang="ts">
// Fetch CTA content from Nuxt Content using the new API
const { data: ctaData } = await useAsyncData('cta', () => queryCollection('cta').first())

// Fetch all branch data
const { data: branchesData } = await useAsyncData('branches', () => queryCollection('branches').all())

// Location selection state
const selectedLocation = ref('airport')

// Computed property for selected location data
const selectedLocationData = computed(() => {
  if (!branchesData.value) return null
  return branchesData.value.find((branch: any) => branch.meta.location === selectedLocation.value)
})

// Function to select location
const selectLocation = (location: string) => {
  selectedLocation.value = location
}

// Default fallback data
const quickBenefits = [
  {
    title: 'Instant Booking',
    description: 'Reserve spaces in real-time',
    icon: 'i-heroicons-bolt'
  },
  {
    title: 'Flexible Plans',
    description: 'Hourly, daily, or monthly options',
    icon: 'i-heroicons-adjustments-horizontal'
  },
  {
    title: 'Premium Support',
    description: '24/7 technical assistance',
    icon: 'i-heroicons-shield-check'
  },
  {
    title: 'Smart Integration',
    description: 'IoT-enabled workspace controls',
    icon: 'i-heroicons-cpu-chip'
  }
]
</script>