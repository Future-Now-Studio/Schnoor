/**
 * Scroll reveal animation composable using Intersection Observer.
 * Add v-scroll-reveal to any element to animate it on scroll.
 * Supports staggered children with [data-reveal-delay] or automatic stagger.
 */
export const useScrollReveal = () => {
  const vScrollReveal = {
    mounted(el: HTMLElement, binding: { value?: string }) {
      const animation = binding.value || 'fade-up'
      el.classList.add('sr', `sr--${animation}`)
      el.style.willChange = 'transform, opacity'

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Stagger children if element has data-stagger attribute
              const stagger = el.dataset.stagger !== undefined
              if (stagger) {
                const children = el.querySelectorAll(':scope > *')
                children.forEach((child, i) => {
                  const htmlChild = child as HTMLElement
                  htmlChild.style.transitionDelay = `${i * 0.1}s`
                  htmlChild.classList.add('sr', 'sr--fade-up')
                  // Trigger in next frame
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
          threshold: 0.15,
          rootMargin: '0px 0px -60px 0px',
        }
      )

      observer.observe(el)
    },
  }

  return { vScrollReveal }
}
