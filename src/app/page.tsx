import Image from 'next/image'
import Button from '@/components/Button'
import LoginForm from '@/components/Panels/LoginForm'
import TopPlayers from '@/components/Panels/TopPlayers'

export default async function Home() {
  return (
    <div className="min-h-[1000px]">
      <section className="relative flex h-screen min-h-[800px] w-full overflow-visible">
        {/* Base background image */}
        <Image
          src="/home/hero.png"
          alt=""
          width={3120}
          height={2646}
          className="absolute inset-0 w-full object-cover object-top-right"
          priority
        />
        <div className="container flex">
          <div className="-mt-20 flex max-w-1/2 flex-1 flex-col items-center justify-center gap-y-6">
            <div className="relative h-fit w-fit">
              <Image
                src="/logo-emblem.png"
                alt=""
                width={952}
                height={952}
                className="absolute h-full w-full blur-[120px]"
              />
              <Image
                src="/logo-emblem.png"
                alt=""
                width={952}
                height={952}
                className="relative h-auto max-w-[476px]"
              />
            </div>
            <div className="relative flex items-center gap-x-8">
              <Image
                src="/shadow.svg"
                alt=""
                width={608}
                height={114}
                className="absolute top-[32px] right-0 left-0 mx-auto"
              />
              <Button variant="large" type="submit">
                Download Now
              </Button>
              <Button variant="large" type="submit">
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
            className="absolute right-0 mt-20 mr-16 w-[720px]"
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
            <source src="/home/character.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <div className="relative">
        <Image
          src="/bg-strip.png"
          alt=""
          width={3120}
          height={5800}
          className="absolute inset-0 top-[-450px] z-10 w-full"
        />
        <div className="relative z-10 container grid grid-cols-12 gap-x-4 px-5">
          <div className="col-span-4 flex flex-col gap-y-4">
            <LoginForm />
            <TopPlayers />
          </div>
          <div className="col-span-8 bg-white p-8"></div>
        </div>
      </div>
    </div>
  )
}
