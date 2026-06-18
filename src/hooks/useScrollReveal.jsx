import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)

  // Destructure primitive option values so we can depend on stable primitives
  const selector = options.selector || '[data-scroll]'
  const rootMargin = options.rootMargin || '0px 0px -10% 0px'
  const threshold = options.threshold ?? 0.12

  useEffect(() => {
    const rootEl = ref.current
    if (!rootEl) return

    // track timeouts so we can clear them on unmount
    const timeouts = []

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const container = entry.target
        const items = Array.from(container.querySelectorAll(selector))

        if (entry.isIntersecting) {
          // reveal each item with a small stagger
          items.forEach((it, i) => {
            it.setAttribute('data-scroll-item', '')
            const id = setTimeout(() => {
              it.classList.add('scroll-animate-in')
              it.classList.remove('scroll-animate-out')
            }, i * 80)
            timeouts.push(id)
          })
        } else {
          items.forEach((it) => {
            it.classList.add('scroll-animate-out')
            it.classList.remove('scroll-animate-in')
          })
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin,
      threshold,
    })

    observer.observe(rootEl)

    return () => {
      observer.disconnect()
      // clear any pending timeouts
      timeouts.forEach((t) => clearTimeout(t))
    }
  }, [selector, rootMargin, threshold])

  return ref
}
