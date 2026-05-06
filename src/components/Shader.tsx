'use client'

import { Shader, FilmGrain, FlowingGradient, Fog, SolidColor } from 'shaders/react'

export default function ShaderEffect() {
  return (
    <div className="">
      <Shader className="fixed h-screen w-screen opacity-60">
        <SolidColor color="#0b0a1e" />

        <Fog
          id="idmo78g2qa8dpr72ig3"
          blending={0.9}
          colorB="#000000"
          detail={3}
          mouseInfluence={0.4}
          seed={91}
          visible={false}
        />

        <FlowingGradient
          colorA="#0d0c1f"
          colorB="#1a2842"
          colorC="#6382a8"
          colorD="#14171E"
          distortion={0}
          maskSource="idmo78g2qa8dpr72ig3"
          maskType="luminance"
          seed={91}
          speed={4}
        />

        <FilmGrain strength={0.075} />
      </Shader>
    </div>
  )
}
