<template>
  <section id="testimonials" class="bg-white red:bg-gray-900">
    <UContainer class="max-w-screen-2xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
       <AppHeadingTitle class="text-center">
          {{ testimonialsData?.meta.title || 'What Our Members Say' }}
        </AppHeadingTitle>
        <p class="text-lg text-gray-600 red:text-gray-400 max-w-2xl mx-auto">
          {{ testimonialsData?.meta.description || 'Discover why professionals choose our workspace for their business success.' }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="testimonial in (testimonialsData?.meta.testimonials || defaultTestimonials)" 
          :key="testimonial.name"
          class="bg-gray-50 red:bg-gray-800 p-8 rounded-lg"
        >
          <!-- Quote -->
          <div class="mb-6">
            <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="w-8 h-8 text-red-500 mb-4" />
            <p class="text-gray-700 red:text-gray-300 italic">
              "{{ testimonial.quote }}"
            </p>
          </div>
          
          <!-- Author -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gray-300 red:bg-gray-600 rounded-full mr-4 overflow-hidden">
              <NuxtImg
                v-if="testimonial.avatar"
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
                loading="lazy"
                placeholder
              />
              <!-- Avatar placeholder -->
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 red:text-white">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-600 red:text-gray-400">
                {{ testimonial.role }}{{ testimonial.company ? `, ${testimonial.company}` : '' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Fetch testimonials content from Nuxt Content using the new API
const { data: testimonialsData } = await useAsyncData('testimonials', () => queryCollection('testimonials').first())

// Default fallback data
const defaultTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    quote: 'The workspace environment here has transformed how our team collaborates. The modern facilities and flexible spaces make every meeting productive.'
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    quote: 'ABB Workspace provided the perfect setting for our growing company. The professional atmosphere and networking opportunities are invaluable.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    quote: 'I love the variety of spaces available. From quiet focus areas to vibrant collaboration zones, there\'s always the perfect spot for any type of work.'
  },
  {
    name: 'David Kim',
    role: 'Consultant',
    quote: 'The location and amenities are outstanding. Client meetings feel professional, and the technology infrastructure supports all our needs.'
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Executive',
    quote: 'The community aspect is what sets this workspace apart. The events and networking opportunities have been crucial for our business growth.'
  },
  {
    name: 'James Wilson',
    role: 'Software Developer',
    quote: 'As a freelancer, having access to professional meeting rooms and high-speed internet has elevated my business to the next level.'
  }
]
</script>