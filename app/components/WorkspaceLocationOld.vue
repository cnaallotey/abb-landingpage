<template>
  <UContainer class="max-w-screen-2xl mx-auto">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="text-center mb-16">
        <AppHeadingTitle class="text-center">
          Our 
          <span class="text-red-500">Locations</span>        
        </AppHeadingTitle>
        <p class="text-lg text-gray-500 red:text-gray-400 max-w-2xl mx-auto">
          Select any of our prime locations to see available spaces and services.
        </p>
      </div>

      <!-- Location Selection Grid -->
      <div class="grid lg:grid-cols-2 gap-6 mb-12">
        <!-- Airport City Office Card -->
        <div 
          :class="[
            'group relative block rounded-xl cursor-pointer transition-all duration-300',
            selectedLocation === 'airport' 
              ? 'ring-4 ring-red-500 scale-105' 
              : 'hover:scale-105'
          ]"
          @click="selectLocation('airport')"
        >
          <div class="shrink-0 relative rounded-xl overflow-hidden w-full h-96 before:absolute before:inset-x-0 before:z-1 before:w-full before:h-full before:bg-linear-to-t before:from-gray-900/70">
            <img class="w-full h-full absolute top-0 left-0 object-cover" src="/images/workspace-hero.jpg" alt="Airport City Office">
          </div>

          <div class="absolute top-0 inset-x-0 z-10">
            <div class="p-4 flex flex-col h-full sm:p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="shrink-0">
                    <img class="w-11 h-11 border-2 border-white rounded-full object-contain p-1 bg-white" src="/images/ABB-logo.png" alt="ABB Logo">
                  </div>
                  <div class="ms-2.5 sm:ms-4">
                    <h4 class="font-semibold text-white">
                      2 Allotey road, East Legon
                    </h4>
                    <p class="text-xs text-white/80">
                      Accra, Ghana
                    </p>
                  </div>
                </div>
                <UIcon 
                  v-if="selectedLocation === 'airport'"
                  name="i-heroicons-check-circle"
                  class="text-white text-2xl"
                />
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 inset-x-0 z-10">
            <div class="flex flex-col h-full p-4 sm:p-6">
              <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Airport City Office
              </h3>
            </div>
          </div>
        </div>

        <!-- Tema City Office Card -->
        <div 
          :class="[
            'group relative block rounded-xl cursor-pointer transition-all duration-300',
            selectedLocation === 'tema' 
              ? 'ring-4 ring-red-500 scale-105' 
              : 'hover:scale-105'
          ]"
          @click="selectLocation('tema')"
        >
          <div class="shrink-0 relative rounded-xl overflow-hidden w-full h-96 before:absolute before:inset-x-0 before:z-1 before:w-full before:h-full before:bg-linear-to-t before:from-gray-900/70">
            <img class="w-full h-full absolute top-0 left-0 object-cover" src="/images/workspace-hero.jpg" alt="Tema City Office">
          </div>

          <div class="absolute top-0 inset-x-0 z-10">
            <div class="p-4 flex flex-col h-full sm:p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="shrink-0">
                    <img class="w-11 h-11 border-2 border-white rounded-full object-contain p-1 bg-white" src="/images/ABB-logo.png" alt="ABB Logo">
                  </div>
                  <div class="ms-2.5 sm:ms-4">
                    <h4 class="font-semibold text-white">
                      Tema Community 16
                    </h4>
                    <p class="text-xs text-white/80">
                      Tema, Ghana
                    </p>
                  </div>
                </div>
                <UIcon 
                  v-if="selectedLocation === 'tema'"
                  name="i-heroicons-check-circle"
                  class="text-white text-2xl"
                />
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 inset-x-0 z-10">
            <div class="flex flex-col h-full p-4 sm:p-6">
              <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Tema City Office
                <UBadge v-if="selectedLocation === 'tema'" color="green" class="ml-2">
                  FREE Logo Display
                </UBadge>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Package Pricing Section -->
      <div v-if="selectedLocation" class="mt-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-900 red:text-white mb-4">
            Available Packages - {{ selectedLocation === 'airport' ? 'Airport' : 'Tema' }} Branch
          </h3>
          <p class="text-gray-600 red:text-gray-400">
            Choose the perfect package that fits your business needs
          </p>
        </div>

        <!-- Package Tabs -->
        <div class="w-full">
          <!-- Tab Navigation -->
          <div class="border-b border-gray-200 red:border-gray-700 mb-8">
            <nav class="flex space-x-8">
              <button 
                v-for="tab in packageTabs" 
                :key="tab.key"
                @click="activeTab = tab.key"
                :class="[
                  'py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap',
                  activeTab === tab.key
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]"
              >
                {{ tab.label }}
              </button>
            </nav>
          </div>

          <!-- Tab Content -->
          <!-- Virtual Office Packages Tab -->
          <div v-if="activeTab === 'virtual-office'" class="grid md:grid-cols-3 gap-6">
              <!-- Unique Plan -->
              <UCard class="relative">
                <template #header>
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="text-xl font-bold text-gray-900 red:text-white">UNIQUE PLAN</h4>
                      <p class="text-sm text-gray-500 mt-1">Perfect for startups</p>
                    </div>
                    <UBadge color="blue" variant="soft">Popular</UBadge>
                  </div>
                </template>
                
                <div class="space-y-4">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-500">GHS 200</div>
                    <div class="text-sm text-gray-500">per month (Annual billing)</div>
                  </div>
                  
                  <ul class="space-y-3 text-sm">
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Premium virtual business address
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Personalized mailbox & reception
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Access to exclusive events
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      10% discount on all ABB services
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      <span v-if="selectedLocation === 'tema'">FREE logo display</span>
                      <span v-else>Logo display (+GHS 700/year)</span>
                    </li>
                  </ul>
                  
                  <UButton color="red" block>
                    Select Unique Plan
                  </UButton>
                </div>
              </UCard>

              <!-- Oscar Plan -->
              <UCard class="relative border-2 border-red-500">
                <template #header>
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="text-xl font-bold text-gray-900 red:text-white">OSCAR PLAN</h4>
                      <p class="text-sm text-gray-500 mt-1">For growing businesses</p>
                    </div>
                    <UBadge color="red">Recommended</UBadge>
                  </div>
                </template>
                
                <div class="space-y-4">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-500">GHS 500</div>
                    <div class="text-sm text-gray-500">per month (Annual billing)</div>
                  </div>
                  
                  <ul class="space-y-3 text-sm">
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Everything in UNIQUE Plan
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Logo display included
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      8 hours co-working space monthly
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Free Wi-Fi & power
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Administrative support
                    </li>
                  </ul>
                  
                  <UButton color="red" block>
                    Select Oscar Plan
                  </UButton>
                </div>
              </UCard>

              <!-- Professional Plan -->
              <UCard>
                <template #header>
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="text-xl font-bold text-gray-900 red:text-white">PROFESSIONAL PLAN</h4>
                      <p class="text-sm text-gray-500 mt-1">For established companies</p>
                    </div>
                    <UBadge color="amber" variant="soft">Premium</UBadge>
                  </div>
                </template>
                
                <div class="space-y-4">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-500">GHS 1,000</div>
                    <div class="text-sm text-gray-500">per month (Annual billing)</div>
                  </div>
                  
                  <ul class="space-y-3 text-sm">
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Everything in UNIQUE Plan
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Logo display included
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      Private company locker space
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      12 hours co-working space monthly
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check" class="text-green-500" />
                      4 hours conference room monthly
                    </li>
                  </ul>
                  
                  <UButton color="red" block>
                    Select Professional Plan
                  </UButton>
                </div>
              </UCard>
            </div>
          </template>

          <!-- Space Rental Tab -->
          <div v-else-if="activeTab === 'space-rental'" class="grid md:grid-cols-3 gap-6">
              <!-- Co-Working Space -->
              <UCard>
                <template #header>
                  <h4 class="text-xl font-bold text-gray-900 red:text-white">Co-Working Space</h4>
                </template>
                
                <div class="space-y-4">
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-3 bg-gray-50 red:bg-gray-800 rounded-lg">
                      <span class="font-medium">Hourly</span>
                      <span class="text-lg font-bold text-red-500">GHS 70</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-gray-50 red:bg-gray-800 rounded-lg">
                      <span class="font-medium">Daily</span>
                      <span class="text-lg font-bold text-red-500">GHS 300</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-red-50 red:bg-red-900/20 rounded-lg border border-red-200">
                      <span class="font-medium">Monthly</span>
                      <span class="text-lg font-bold text-red-500">GHS 3,000</span>
                    </div>
                  </div>
                  
                  <div class="text-sm text-gray-600 red:text-gray-400">
                    <p class="font-medium mb-2">Includes:</p>
                    <ul class="space-y-1">
                      <li>• High-speed Wi-Fi</li>
                      <li>• Uninterrupted power</li>
                      <li>• Administrative support</li>
                      <li>• Business event access</li>
                      <li>• Dedicated locker (Monthly)</li>
                    </ul>
                  </div>
                  
                  <UButton color="red" block>
                    Book Co-Working Space
                  </UButton>
                </div>
              </UCard>

              <!-- Premium Private Office -->
              <UCard>
                <template #header>
                  <h4 class="text-xl font-bold text-gray-900 red:text-white">Premium Private Office</h4>
                </template>
                
                <div class="space-y-4">
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-3 bg-gray-50 red:bg-gray-800 rounded-lg">
                      <span class="font-medium">Hourly</span>
                      <span class="text-lg font-bold text-red-500">GHS 200</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-red-50 red:bg-red-900/20 rounded-lg border border-red-200">
                      <span class="font-medium">Daily</span>
                      <span class="text-lg font-bold text-red-500">GHS 1,000</span>
                    </div>
                  </div>
                  
                  <div class="text-sm text-gray-600 red:text-gray-400">
                    <p class="font-medium mb-2">Includes:</p>
                    <ul class="space-y-1">
                      <li>• Private furnished office (1-2 guests)</li>
                      <li>• Reception services</li>
                      <li>• Mail handling</li>
                      <li>• Storage space</li>
                      <li>• Coffee bar access</li>
                      <li>• Complimentary refreshments (Daily)</li>
                    </ul>
                  </div>
                  
                  <UButton color="red" block>
                    Book Private Office
                  </UButton>
                </div>
              </UCard>

              <!-- Conference Space -->
              <UCard>
                <template #header>
                  <h4 class="text-xl font-bold text-gray-900 red:text-white">Conference Space</h4>
                </template>
                
                <div class="space-y-4">
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-3 bg-gray-50 red:bg-gray-800 rounded-lg">
                      <span class="font-medium">Hourly</span>
                      <span class="text-lg font-bold text-red-500">GHS 300</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-red-50 red:bg-red-900/20 rounded-lg border border-red-200">
                      <span class="font-medium">Daily</span>
                      <span class="text-lg font-bold text-red-500">GHS 1,500</span>
                    </div>
                  </div>
                  
                  <div class="text-sm text-gray-600 red:text-gray-400">
                    <p class="font-medium mb-2">Includes:</p>
                    <ul class="space-y-1">
                      <li>• 6-8 seater room</li>
                      <li>• Digital presentation screen</li>
                      <li>• Whiteboard</li>
                      <li>• Reception services</li>
                      <li>• Refreshments (water & coffee)</li>
                    </ul>
                  </div>
                  
                  <UButton color="red" block>
                    Book Conference Room
                  </UButton>
                </div>
              </UCard>
            </div>
          </template>

          <!-- Additional Services Tab -->
          <div v-else-if="activeTab === 'additional-services'">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UCard v-for="service in additionalServices" :key="service.name">
                <template #header>
                  <div class="flex items-center gap-3">
                    <UIcon :name="service.icon" class="text-red-500 text-xl" />
                    <h4 class="text-lg font-bold text-gray-900 red:text-white">{{ service.name }}</h4>
                  </div>
                </template>
                
                <div class="space-y-4">
                  <p class="text-sm text-gray-600 red:text-gray-400">{{ service.description }}</p>
                  
                  <div class="text-center">
                    <div class="text-lg font-bold text-red-500">Pricing on Request</div>
                  </div>
                  
                  <UButton color="red" variant="outline" block>
                    Get Quote
                  </UButton>
                </div>
              </UCard>
            </div>
            
            <div class="mt-8 p-6 bg-amber-50 red:bg-amber-900/20 rounded-lg border border-amber-200">
              <div class="flex items-start gap-3">
                <UIcon name="i-heroicons-information-circle" class="text-amber-500 text-xl mt-0.5" />
                <div>
                  <h4 class="font-semibold text-amber-800 red:text-amber-200 mb-2">Important Note</h4>
                  <p class="text-sm text-amber-700 red:text-amber-300">
                    All prices shown are exclusive of VAT. Contact our team for detailed quotes on additional services and custom packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const selectedLocation = ref<'airport' | 'tema' | null>(null)
const activeTab = ref('virtual-office')

const selectLocation = (location: 'airport' | 'tema') => {
  selectedLocation.value = location
}

const packageTabs = [
  {
    key: 'virtual-office',
    label: 'Virtual Office Packages',
    description: 'Professional virtual office solutions'
  },
  {
    key: 'space-rental',
    label: 'Space Rental',
    description: 'Flexible workspace and meeting rooms'
  },
  {
    key: 'additional-services',
    label: 'Additional Services',
    description: 'Business support and professional services'
  }
]

const additionalServices = [
  {
    name: 'Business Registration',
    description: 'Complete business registration and legal setup support',
    icon: 'i-heroicons-building-office'
  },
  {
    name: 'Branding & Design',
    description: 'Professional branding, logo design, and marketing materials',
    icon: 'i-heroicons-paint-brush'
  },
  {
    name: 'Virtual Administration',
    description: 'Remote administrative support and virtual assistant services',
    icon: 'i-heroicons-user-group'
  },
  {
    name: 'Legal & Compliance',
    description: 'Legal advisory services and regulatory compliance support',
    icon: 'i-heroicons-scale'
  },
  {
    name: 'Marketing & Growth',
    description: 'Business development, marketing strategies, and growth consulting',
    icon: 'i-heroicons-chart-bar'
  },
  {
    name: 'Accounting & Tax',
    description: 'Comprehensive accounting, bookkeeping, and taxation services',
    icon: 'i-heroicons-calculator'
  },
  {
    name: 'Creative & Media',
    description: 'Creative content production and media services',
    icon: 'i-heroicons-camera'
  }
]
</script>