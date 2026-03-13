export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-reveal', {
    // SSR: getSSRProps prevents Vue from complaining about unknown directive
    getSSRProps() {
      return {}
    },

    mounted(el: HTMLElement, binding: { value?: string }) {
      // Only run on client
      if (typeof window === 'undefined') return

      const animation = binding.value || 'fade-up'
      el.classList.add('sr', `sr--${animation}`)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Stagger children
              if (el.dataset.stagger !== undefined) {
                const children = el.querySelectorAll(':scope > *')
                children.forEach((child, i) => {
                  const htmlChild = child as HTMLElement
                  htmlChild.classList.add('sr', 'sr--fade-up')
                  htmlChild.style.transitionDelay = `${i * 0.12}s`
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      htmlChild.classList.add('sr--visible')
                    })
                  })
                })
              }

              requestAnimationFrame(() => {
                el.classList.add('sr--visible')
              })
              observer.unobserve(el)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(el)
    },
  })
})
