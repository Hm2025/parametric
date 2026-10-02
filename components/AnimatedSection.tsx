'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

export default function AnimatedSection({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const element = entry.target as HTMLDivElement
      const items = Array.from(element.querySelectorAll<HTMLElement>(
        'img, h1, h2, h3, h4, h5, h6, p, blockquote, li, .button-primary',
      )).filter((item) => item.closest('.animated-section') === element)
      const imageCount = items.filter((item) => item instanceof HTMLImageElement).length
      let imageIndex = 0
      let textIndex = 0

      items.forEach((item) => {
        const isImage = item instanceof HTMLImageElement
        const bounds = item.getBoundingClientRect()
        const midpoint = bounds.left + bounds.width / 2
        const viewportMidpoint = window.innerWidth / 2
        const direction = isImage
          ? midpoint > viewportMidpoint * 1.3 ? 'right' : midpoint < viewportMidpoint * 0.7 ? 'left' : 'top'
          : 'left'
        const itemDelay = isImage
          ? Math.min(delay, 2.5) + imageIndex++ * 0.2
          : Math.min(delay, 2.5) + imageCount * 0.2 + (imageCount ? 1.55 : 0) + textIndex++ * 0.15

        item.dataset.motionItem = isImage ? 'image' : 'text'
        item.dataset.motionDirection = direction
        item.style.setProperty('--item-delay', `${itemDelay}s`)
      })

      requestAnimationFrame(() => setIsVisible(true))
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
