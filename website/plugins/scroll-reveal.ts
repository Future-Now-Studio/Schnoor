export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-reveal', {
    getSSRProps() {
      return {}
    },

    mounted(el: HTMLElement, binding: { value?: string }) {
      if (typeof window === 'undefined') return

      const animation = binding.value || 'fade-up'
      el.classList.add('sr', `sr--${animation}`)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (el.dataset.stagger !== undefined) {
                const children = el.querySelectorAll(':scope > *')
                children.forEach((child, i) => {
                  const htmlChild = child as HTMLElement
                  htmlChild.classList.add('sr', 'sr--fade-up')
                  htmlChild.style.transitionDelay = `${i * 0.1}s`
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
          threshold: 0.12,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(el)
    },
  })
})
