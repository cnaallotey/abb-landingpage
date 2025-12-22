export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('animate', {
        mounted(el) {
            // Add initial classes for hidden state
            el.classList.add(
                'transition-all',
                'duration-1000',
                'ease-out',
                'opacity-0',
                'translate-y-10',
                'motion-reduce:transition-none',
                'motion-reduce:opacity-100',
                'motion-reduce:translate-y-0'
            )

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Show element
                            el.classList.remove('opacity-0', 'translate-y-10')
                            el.classList.add('opacity-100', 'translate-y-0')

                            // Stop observing once shown
                            observer.unobserve(el)
                        }
                    })
                },
                {
                    threshold: 0.1, // Trigger when 10% visible
                    rootMargin: '50px' // Start slightly before it comes into view
                }
            )

            observer.observe(el)
        }
    })
})
