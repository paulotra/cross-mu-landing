'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

const config: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    number: { value: 50, density: { enable: true, width: 800 } },
    color: { value: ['#D2D4DE', '#95D3FD', '#E574B5'] },
    opacity: {
      value: { min: 0.1, max: 0.45 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: { value: { min: 0.1, max: 2 } },
    move: {
      enable: true,
      speed: { min: 1, max: 2 },
      direction: 'top',
      straight: false,
      outModes: { default: 'out' },
    },
    shadow: { enable: true, color: '#95D3FD', blur: 6 },
  },
  detectRetina: true,
}

export default function HeroParticles() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[200%]">
      <Particles
        id="particles"
        options={config}
        className="absolute inset-0 size-full"
      />
    </div>
  )
}
