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
          }
        })
      },
      { threshold: 0.08 }
    )

    // Small delay so Next.js finishes painting the new route's DOM
    const setupTimer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 60)

    // Safety fallback: reveal everything after 2.5s in case observer misses
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible')
      })
    }, 2500)

    return () => {
      clearTimeout(setupTimer)
      clearTimeout(safetyTimer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
