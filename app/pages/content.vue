<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Content Management
        </h1>
        
        <!-- Content Sections -->
        <div class="space-y-8">
          <!-- Hero Content -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">Hero Section</h2>
            </template>
            
            <div v-if="heroData">
              <h3 class="text-xl font-semibold mb-2">{{ heroData.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ heroData.subtitle }}</p>
              <div class="flex gap-2">
                <UBadge color="blue">{{ heroData.cta?.primary?.text }}</UBadge>
                <UBadge color="gray" variant="soft">{{ heroData.cta?.secondary?.text }}</UBadge>
              </div>
            </div>
            <div v-else class="text-gray-500">Loading hero content...</div>
          </UCard>

          <!-- Stats Content -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">Statistics Section</h2>
            </template>
            
            <div v-if="statsData">
              <h3 class="text-xl font-semibold mb-2">{{ statsData.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ statsData.description }}</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div 
                  v-for="stat in statsData.stats" 
                  :key="stat.label"
                  class="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <div class="text-2xl font-bold text-red-600">{{ stat.value }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
                </div>
              </div>
            </div>
            <div v-else class="text-gray-500">Loading stats content...</div>
          </UCard>

          <!-- Services Content -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">Services Section</h2>
            </template>
            
            <div v-if="servicesData">
              <h3 class="text-xl font-semibold mb-2">{{ servicesData.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ servicesData.description }}</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  v-for="service in servicesData.services" 
                  :key="service.title"
                  class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <h4 class="font-semibold mb-2">{{ service.title }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ service.description }}</p>
                  <UBadge size="xs" color="red">{{ service.cta?.text }}</UBadge>
                </div>
              </div>
            </div>
            <div v-else class="text-gray-500">Loading services content...</div>
          </UCard>

          <!-- SEO Content -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">SEO Configuration</h2>
            </template>
            
            <div v-if="seoData">
              <h3 class="text-xl font-semibold mb-2">{{ seoData.seo?.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ seoData.seo?.description }}</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold mb-2">Site Information</h4>
                  <ul class="text-sm space-y-1">
                    <li><strong>Name:</strong> {{ seoData.site?.name }}</li>
                    <li><strong>URL:</strong> {{ seoData.site?.url }}</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">SEO Keywords</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ seoData.seo?.keywords }}</p>
                </div>
              </div>
            </div>
            <div v-else class="text-gray-500">Loading SEO content...</div>
          </UCard>

          <!-- Content Files Info -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">Content Management</h2>
            </template>
            
            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-400">
                Content is managed through Markdown files in the <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">/content</code> directory:
              </p>
              
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-blue-500" />
                  <code class="text-sm">content/hero.md</code> - Hero section content
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-blue-500" />
                  <code class="text-sm">content/stats.md</code> - Statistics section
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-blue-500" />
                  <code class="text-sm">content/services.md</code> - Services section
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-blue-500" />
                  <code class="text-sm">content/benefits.md</code> - Benefits section
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-blue-500" />
                  <code class="text-sm">content/testimonials.md</code> - Testimonials section
                </li>
              </ul>

              <div class="mt-6">
                <UButton to="/" color="red">
                  Back to Landing Page
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Custom SEO for this page (avoiding the full useSEO composable)
useSeoMeta({
  title: 'Content Management - ABB Workspace',
  description: 'Manage and preview ABB Workspace landing page content powered by Nuxt Content',
  robots: 'noindex,nofollow' // Don't index this admin page
})

// Fetch all content using the new Nuxt Content API
const { data: heroData } = await useAsyncData('hero', () => queryCollection('hero').first())
const { data: statsData } = await useAsyncData('stats', () => queryCollection('stats').first())
const { data: servicesData } = await useAsyncData('services', () => queryCollection('services').first())
const { data: seoData } = await useAsyncData('seo-config', () => queryCollection('seo').first())
</script>