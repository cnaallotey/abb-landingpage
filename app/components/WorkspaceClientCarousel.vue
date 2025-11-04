<template>
  <div class="relative overflow-hidden w-full">
    <!-- Single row with 5 visible items -->
    <div class="flex items-center justify-center space-x-12">
      <TransitionGroup 
        name="client-spin" 
        tag="div" 
        class="grid grid-cols-5 gap-4"
      >
        <div
          v-for="client in visibleClients"
          :key="`${client.meta.name}-${client._id}`"
          class="shrink-0 w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <NuxtImg
            :src="client.meta.logo"
            :alt="client.meta.name"
            :title="client.meta.name"
            class="max-w-full max-h-full h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ClientMeta {
  name: string
  logo: string
  industry: string
  website: string
  category: string
}

interface Client {
  meta: ClientMeta
  [key: string]: unknown // Allow other Nuxt Content properties
}

// Fetch all clients from Nuxt Content
const { data: allClients } = await useAsyncData('clients', () => queryCollection('clients').all())

// Reactive state for visible clients with unique IDs
interface ClientWithId extends Client {
  _id: string
}

const visibleClients = ref<ClientWithId[]>([])
const clientPool = ref<Client[]>([])

// Initialize with first 5 clients
const initializeClients = () => {
  if (!allClients.value || allClients.value.length === 0) return
  
  const clients = allClients.value as unknown as Client[]
  
  if (clients.length >= 5) {
    visibleClients.value = clients.slice(0, 5).map((client, index) => ({
      ...client,
      _id: `${client.meta.name}-${index}`
    }))
    clientPool.value = clients.slice(5)
  } else {
    // If less than 5 clients, duplicate some to fill 5 slots
    const repeated: ClientWithId[] = []
    for (let i = 0; i < 5; i++) {
      const client = clients[i % clients.length]
      if (client) {
        repeated.push({
          ...client,
          _id: `${client.meta.name}-${i}`
        })
      }
    }
    visibleClients.value = repeated
  }
}

// Random client switching function
const switchRandomClient = () => {
  if (clientPool.value.length === 0) {
    // Reset pool if empty
    clientPool.value = (allClients.value as unknown as Client[]) || []
  }
  
  // Pick random position to replace (0-4)
  const randomIndex = Math.floor(Math.random() * 5)
  
  // Pick random client from pool
  const randomClientIndex = Math.floor(Math.random() * clientPool.value.length)
  const newClient = clientPool.value[randomClientIndex]
  
  if (!newClient) return
  
  // Create new client with unique ID for transition
  const clientWithId: ClientWithId = {
    ...newClient,
    _id: `${newClient.meta.name}-${Date.now()}`
  }
  
  // Replace client at random position
  visibleClients.value[randomIndex] = clientWithId
  
  // Remove from pool to avoid immediate repetition
  clientPool.value.splice(randomClientIndex, 1)
}

// Auto-switching interval
let switchInterval: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  initializeClients()
  
  // Start switching every 2-3 seconds with random delay
  const startSwitching = () => {
    const randomDelay = 2000 + Math.random() * 1000 // 2-3 seconds
    switchInterval = setTimeout(() => {
      switchRandomClient()
      startSwitching() // Schedule next switch
    }, randomDelay)
  }
  
  // Start after initial 3 second delay
  setTimeout(startSwitching, 3000)
})

onUnmounted(() => {
  if (switchInterval) {
    clearTimeout(switchInterval)
  }
})
</script>

<style scoped>
.client-spin-enter-active,
.client-spin-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.client-spin-enter-from {
  opacity: 0;
  transform: translateY(100%) rotateX(90deg);
}

.client-spin-leave-to {
  opacity: 0;
  transform: translateY(-100%) rotateX(-90deg);
}

.client-spin-move {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhance 3D effect */
.client-spin-enter-active,
.client-spin-leave-active {
  transform-style: preserve-3d;
  perspective: 1000px;
}
</style>