<template>
  <footer class="bg-gray-900 text-white">
    <UContainer class="max-w-screen-2xl">
      <div class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span class="text-white font-bold text-sm">ABB</span>
              </div>
              <span class="font-bold text-xl">Workspace</span>
            </div>
            <p class="text-gray-400 text-sm mb-4">
              Innovating the future of collaborative workspaces with cutting-edge technology and sustainable design.
            </p>
            <div class="flex space-x-4">
              <UButton 
                variant="ghost" 
                size="xs" 
                icon="i-simple-icons-linkedin"
                to="https://linkedin.com/company/abb"
                target="_blank"
              />
              <UButton 
                variant="ghost" 
                size="xs" 
                icon="i-simple-icons-twitter"
                to="https://twitter.com/abb"
                target="_blank"
              />
              <UButton 
                variant="ghost" 
                size="xs" 
                icon="i-simple-icons-instagram"
                to="https://instagram.com/abb"
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
                <span class="text-gray-400 text-sm">123 Business Ave, Tech City, TC 12345</span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-phone" class="w-4 h-4 text-red-500" />
                <span class="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-red-500" />
                <span class="text-gray-400 text-sm">hello@abbworkspace.com</span>
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
          <div class="flex space-x-6">
            <NuxtLink 
              v-for="legal in legalLinks" 
              :key="legal.to"
              :to="legal.to"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {{ legal.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { to: '/#features', label: 'Services' },
  { to: '/#showcase', label: 'Spaces' },
  { to: '/#benefits', label: 'Membership' },
  { to: '/#testimonials', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About Us' }
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