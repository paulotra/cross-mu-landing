'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import HeroParticles from '@/components/HeroParticles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Hero() {
  useGSAP(() => {
    gsap.from('.hero button, .logo', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.2,
    })

    gsap.utils.toArray<HTMLElement>('.scrub').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          // scrub: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
      })
    })

    gsap.to('.stripped', {
      scrollTrigger: {
        trigger: '.stripped',
        start: 'top 50%',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
      y: -140,
      duration: 0.6,
    })
  })

  return (
    <section className="hero relative flex min-h-[520px] w-full overflow-visible md:min-h-[800px]">
      <HeroParticles />
      {/* Base background image */}
      <Image
        src="/home/hero.webp"
        alt=""
        width={3120}
        height={2646}
        className="absolute inset-0 w-full object-cover object-top-right opacity-90"
        priority
      />
      <div className="relative container flex">
        <div className="relative z-10 -mt-20 flex flex-1 flex-col items-center justify-center gap-y-6 lg:max-w-1/2">
          <div className="logo relative mt-20 hidden h-fit w-fit pt-20 md:block lg:mt-0 lg:pt-0">
            <Image
              src="/logo-emblem.webp"
              alt=""
              width={952}
              height={952}
              className="absolute h-full w-full blur-[120px]"
            />
            <Image
              src="/logo-emblem.webp"
              alt=""
              width={952}
              height={952}
              className="relative h-auto max-w-[360px] lg:max-w-[476px]"
            />
          </div>
          <div className="relative top-40 flex flex-col items-center gap-8 md:top-0 md:flex-row">
            <Image
              src="/shadow.svg"
              alt=""
              width={608}
              height={114}
              className="absolute right-0 left-0 mx-auto"
            />
            <Button variant="large" type="submit">
              <Image src="/icons/download.svg" alt="" width={18} height={18} className="" />
              Download Now
            </Button>
            <Button variant="large" type="submit">
              <Image
                src="/icons/discord.svg"
                alt=""
                width={24}
                height={24}
                className="top relative"
              />
              Join Discord
            </Button>
          </div>
        </div>

        {/* Video overlay — blended on top of background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 left-[-70px] mx-auto mt-8 min-w-[520px] md:left-[-40px] md:-mt-10 lg:left-auto lg:mt-20 lg:mr-8 lg:w-[720px]"
          style={{
            maskImage: [
              'linear-gradient(to right, transparent 0%, black 25%)',
              'linear-gradient(to left, transparent 0%, black 10%)',
              'linear-gradient(to top, transparent 0%, black 20%)',
              'linear-gradient(to bottom, transparent 0%, black 10%)',
            ].join(', '),
            maskComposite: 'intersect',
          }}
        >
          <source src="/home/character.webm" type="video/webm" />
          <source src="/home/character.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
