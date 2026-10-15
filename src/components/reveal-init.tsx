'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    // Small delay so Next.js finishes painting the new route's DOM
    const setupTimer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 60)

    return () => {
      clearTimeout(setupTimer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
