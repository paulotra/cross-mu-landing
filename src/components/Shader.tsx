'use client'

import { Shader, FilmGrain, FlowingGradient, Fog, SolidColor } from 'shaders/react'

export default function ShaderEffect() {
  return (
    <div className="">
      <Shader className="fixed h-screen w-screen min-w-[800px] opacity-80">
        <SolidColor color="#0b0a1e" />

        <Fog
          id="idmo78g2qa8dpr72ig3"
          blending={0}
          colorB="#000000"
          detail={50}
          mouseInfluence={2}
          mouseRadius={0.18}
          seed={60}
          speed={1.3}
          turbulence={0.85}
          visible={false}
        />

        <FlowingGradient
          colorA="#0d0c1f"
          colorB="#1a2842"
          colorC="#596e87"
          colorD="#1A1D2B"
          distortion={0}
          maskSource="idmo78g2qa8dpr72ig3"
          maskType="luminance"
          seed={60}
          speed={1.3}
        />

        <FilmGrain strength={0.075} />
      </Shader>
    </div>
  )
}
