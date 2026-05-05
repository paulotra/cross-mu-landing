'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, ISourceOptions } from 'tsparticles-engine'

const baseConfig: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    number: { value: 50, density: { enable: true, area: 800 } },
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
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[200%]">
      <Particles
        id="particles"
        init={init}
        options={baseConfig}
        style={{ position: 'absolute', inset: 0 }}
      />
    </div>
  )
}
