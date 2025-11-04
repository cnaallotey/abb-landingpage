<template>
  <footer class="bg-gray-900 text-white">
    <UContainer class="max-w-screen-2xl">
      <div class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class=" rounded flex items-center justify-center">
                <NuxtImg
                  src="/images/ABB-logo.png"
                  alt="ABB Workspace"
                  class="w-full h-28 object-contain"
                />
              </div>
            </div>
            <p class="text-gray-400 text-sm mb-4">
              Innovating the future of collaborative workspaces with cutting-edge technology and sustainable design.
            </p>
            <div class="flex space-x-4">
              <UButton 
                variant="ghost" 
                size="lg" 
                icon="i-simple-icons-linkedin"
                color="red"
                to="https://www.linkedin.com/company/africa-business-bureau/"
                target="_blank"
              />
              <UButton 
                variant="ghost" 
                size="lg" 
                color="red"
                icon="i-simple-icons-facebook"
                to="https://web.facebook.com/AfricanBusinessBureau/"
                target="_blank"
              />
              <UButton 
                variant="ghost" 
                size="lg" 
                color="red"
                icon="i-simple-icons-instagram"
                to="https://www.instagram.com/abb.africa/"
                target="_blank"
              />
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="link in quickLinks" :key="link.to">
                <NuxtLink 
                  :to="link.to"
                  class="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Services</h4>
            <ul class="space-y-2">
              <li v-for="service in services" :key="service">
                <span class="text-gray-400 text-sm">{{ service }}</span>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Contact</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-red-500" />
                <span class="text-gray-400 text-sm">BF 254, Paa Grant St. Community 10, Tema. GPS: GT-123-9133</span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-phone" class="w-4 h-4 text-red-500" />
                <span class="text-gray-400 text-sm">0302970752 / 0302907459</span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-red-500" />
                <span class="text-gray-400 text-sm">info@africabusinessbureau.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 ABB Workspace. All rights reserved.
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { to: '/#services', label: 'Services' },
  { to: '/#locations', label: 'Spaces' },
  { to: '/#benefits', label: 'Membership Benefits' },
  { to: '/#contact', label: 'Contact' },
  { to: '/#about', label: 'About Us' }
]

const services = [
  'Hot Desks',
  'Private Offices',
  'Meeting Rooms',
  'Virtual Offices',
  'Event Spaces',
  'Coworking Memberships'
]

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/cookies', label: 'Cookie Policy' }
]
</script>