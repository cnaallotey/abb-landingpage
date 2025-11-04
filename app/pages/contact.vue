<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Get in touch with our team to learn more about ABB Workspace Office
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Address</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    ABB Technology Center<br>
                    Affolternstrasse 44<br>
                    8050 Zurich, Switzerland
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-phone" class="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p class="text-gray-600 dark:text-gray-300">+41 43 317 71 11</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p class="text-gray-600 dark:text-gray-300">workspace@abb.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-clock" class="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Operating Hours</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 6:00 AM - 10:00 PM<br>
                    Saturday - Sunday: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <UButton 
                  variant="outline" 
                  size="sm" 
                  icon="i-simple-icons-linkedin"
                  to="https://linkedin.com/company/abb"
                  target="_blank"
                >
                  LinkedIn
                </UButton>
                <UButton 
                  variant="outline" 
                  size="sm" 
                  icon="i-simple-icons-twitter"
                  to="https://twitter.com/abb"
                  target="_blank"
                >
                  Twitter
                </UButton>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <UCard class="p-8">
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Send Us a Message
            </h2>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UInput
                  placeholder="First Name"
                  required
                />
                <UInput
                  placeholder="Last Name"
                  required
                />
              </div>
              
              <UInput
                type="email"
                placeholder="Email Address"
                required
              />
              
              <UInput
                placeholder="Company"
              />
              
              <USelect
                placeholder="Inquiry Type"
                :options="inquiryTypes"
                required
              />
              
              <UTextarea
                placeholder="Your Message"
                rows="4"
                required
              />
              
              <UButton 
                size="lg" 
                color="red" 
                block
                type="submit"
              >
                Send Message
              </UButton>
            </form>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const inquiryTypes = [
  'General Information',
  'Workspace Booking',
  'Partnership Opportunities',
  'Technical Support',
  'Event Hosting',
  'Innovation Lab Access',
  'Other'
]

useSeoMeta({
  title: 'Contact - ABB Workspace Office',
  description: 'Get in touch with our team to learn more about ABB Workspace Office and our innovative collaborative spaces.'
})
</script>