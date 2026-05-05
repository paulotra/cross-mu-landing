'use client'

import { useEffect, useRef, useState } from 'react'

export default function PageLoader() {
  const alreadySeen =
    typeof window !== 'undefined' && !!sessionStorage.getItem('loaded')

  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(alreadySeen)
  const timer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    if (alreadySeen) return

    const hide = () => {
      if (timer.current) clearTimeout(timer.current)
      sessionStorage.setItem('loaded', '1')
      setFading(true)
      timer.current = setTimeout(() => setGone(true), 600)
    }

    // fire immediately if already loaded, otherwise wait for the event
    if (document.readyState === 'complete') {
      hide()
    } else {
      window.addEventListener('load', hide, { once: true })
      // safety fallback — never block longer than 4s
      timer.current = setTimeout(hide, 4000)
    }

    return () => {
      window.removeEventListener('load', hide)
      if (timer.current) clearTimeout(timer.current)
    }
  }, [alreadySeen])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1117] transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
    />
  )
}
