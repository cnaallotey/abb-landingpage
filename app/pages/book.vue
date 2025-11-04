<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <UContainer class="py-16">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Book Your Workspace
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Reserve your ideal workspace space for maximum productivity and collaboration.
        </p>
        
        <UCard class="p-8">
          <h2 class="text-2xl font-semibold mb-6">Booking Form</h2>
          <p class="text-gray-600 dark:text-gray-400">
            Booking system integration coming soon. For immediate reservations, please contact us directly.
          </p>
          
          <div class="mt-8 space-y-4">
            <UButton 
              size="lg" 
              color="red" 
              block
              to="/contact"
            >
              Contact Us to Book
            </UButton>
            <UButton 
              size="lg" 
              color="gray" 
              variant="outline"
              block
              to="/"
            >
              Back to Home
            </UButton>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Book Your Workspace - ABB Workspace Office',
  description: 'Reserve your ideal workspace space at ABB for maximum productivity and collaboration.'
})
</script>