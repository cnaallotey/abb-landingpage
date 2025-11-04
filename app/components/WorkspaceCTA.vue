<template>
  <UPageCTA
    :title="ctaData?.meta?.title || 'Ready to Experience the Future of Work? Send Us a Message'"
    :description="ctaData?.meta?.description || 'Join leading teams who have transformed their productivity and innovation capabilities with ABB\'s workspace solutions.'"
    align="center"
    :ui="{title: 'text-white', description: '!text-white/90'}"
    class="bg-linear-to-r !rounded-none from-red-600 to-red-700 !text-white py-16"
  >
    <template #default>
      <div class="flex flex-col gap-4 justify-center">
        <!-- Comment Form -->
<div class="max-w-3xl w-full px-4 mx-auto -mt-12">

    <!-- Card -->
    <div class="mt-5 p-4 relative z-10 bg-white border text-left border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
      <form>
        <div class="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" class="block mb-2 text-sm font-medium text-gray-700">Full name</label>
          <input type="text" id="hs-feedback-post-comment-name-1" class="py-2.5 border sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Full name">
        </div>

        <div class="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-email-1" class="block mb-2 text-sm font-medium text-gray-700">Email address</label>
          <input type="email" id="hs-feedback-post-comment-email-1" class="py-2.5 border sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email address">
        </div>

        <div>
          <label for="hs-feedback-post-comment-textarea-1" class="block mb-2 text-sm  font-medium text-gray-700">Comment</label>
          <div class="mt-1">
            <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" class="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Leave your comment here..."></textarea>
          </div>
        </div>

        <div class="mt-6 grid">
          <UButton 
          size="xl" 
          color="white" 
          variant="solid"
          :icon="ctaData?.meta?.buttons?.form?.icon || 'i-heroicons-arrow-right'"
          type="submit"
          class="text-white bg-red-600 px-10 inline-flex justify-center items-center py-4 text-base rounded-full"
        >
          {{ ctaData?.meta?.buttons?.form?.submit || 'Submit' }}
        </UButton>
        </div>
      </form>
    </div>
    <!-- End Card -->
  </div>
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