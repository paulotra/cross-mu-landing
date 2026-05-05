'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(
    () => typeof window !== 'undefined' && !!sessionStorage.getItem('loaded')
  )

  useEffect(() => {
    if (gone) return

    const hide = () => {
      sessionStorage.setItem('loaded', '1')
      setFading(true)
      setTimeout(() => setGone(true), 600)
    }

    if (document.readyState === 'complete') {
      setTimeout(hide, 100)
      return
    }
    window.addEventListener('load', hide)
    return () => window.removeEventListener('load', hide)
  }, [gone])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1117] transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* <Image src="/logo-emblem.webp" alt="" width={400} height={400} priority /> */}
    </div>
  )
}
