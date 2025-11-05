<template>
  <section id="features" class="bg-white red:bg-gray-900">
    <UContainer class="max-w-screen-2xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-8 md:mb-16">
        <AppHeadingTitle class="text-center">
          {{ servicesData?.meta.title || 'See Our Spaces' }}
        </AppHeadingTitle>
        <p class="text-lg text-gray-500 red:text-gray-400 max-w-2xl mx-auto">
          {{ servicesData?.meta.description || 'Comprehensive workspace solutions tailored to meet your business needs.' }}
        </p>
      </div>
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="service in (servicesData?.meta.services || defaultServices)" 
          :key="service.title"
          class=" bg-gray-50 group relative red:bg-gray-800 aspect-2/3 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
        >
          <!-- Service Image Placeholder -->
          <div class="absolute inset-0 h-full bg-gray-200 red:bg-gray-700 rounded-lg mb-6 overflow-hidden">
            <NuxtImg
              v-if="service.image"
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-125 transition-transform ease-linear duration-500 object-center"
              loading="lazy"
              placeholder
            />
            <!-- Fallback placeholder -->
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-gray-400">Service Image</span>
            </div>
          </div>
          
          <div class="relative flex flex-col justify-end text-left w-full h-full p-4 md:p-6 pt-40">
          <!-- Service Content -->
          <div class="grid rounded-2xl p-4 md:p-6 bg-black">
          <h3 class="text-2xl font-semibold text-red-500 mb-4">
            {{ service.title }}
          </h3>
          <p class="text-white mb-6">
            {{ service.description }}
          </p>
          
          <!-- Features List -->
          <ul v-if="service.features" class="text-sm text-white mb-6 space-y-1">
            <li v-for="feature in service.features" :key="feature">
              • {{ feature }}
            </li>
          </ul>
          </div>
          </div>
          
          
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Fetch services content from Nuxt Content using the new API
const { data: servicesData } = await useAsyncData('services', () => queryCollection('services').first())

// Default fallback data
const defaultServices = [
  {
    title: 'Coworking Spaces',
    description: 'Open, collaborative environments that foster creativity and networking among professionals.',
    image: '/images/co-working-space.jpg',
    features: ['Hot desks and dedicated desks', '24/7 access', 'High-speed internet'],
    cta: { text: 'Learn More', link: '/services/coworking' }
  },
  {
    title: 'Private Offices',
    description: 'Secure, professional spaces for teams that need privacy and dedicated resources.',
    image: '/images/private-office.jpg',
    features: ['Fully furnished offices', 'Meeting room access', 'Storage solutions'],
    cta: { text: 'View Offices', link: '/services/private-offices' }
  },
  {
    title: 'Meeting Rooms',
    description: 'State-of-the-art conference rooms equipped with the latest presentation technology.',
    image: '/images/meeting-room.jpg',
    features: ['HD video conferencing', 'Smart whiteboards', 'Flexible seating'],
    cta: { text: 'Book Now', link: '/services/meeting-rooms' }
  }
]
</script>