'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function PageReveal() {
  useEffect(() => {
    const reveal = () => {
      gsap.to(document.body, { opacity: 1, duration: 0.8, ease: 'power2.out' })
    }
    if (document.readyState === 'complete') {
      reveal()
    } else {
      window.addEventListener('load', reveal, { once: true })
    }
  }, [])
  return null
}
