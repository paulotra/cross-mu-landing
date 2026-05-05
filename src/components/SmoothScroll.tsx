'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current!,
      content: content.current!,
      smooth: 1.5,
      effects: true,
    })

    return () => smoother.kill()
  }, [])

  return (
    <div ref={wrapper} id="smooth-wrapper">
      <div ref={content} id="smooth-content">
        {children}
      </div>
    </div>
  )
}
