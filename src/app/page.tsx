import Image from 'next/image'
import Button from '@/components/Button'
import LoginForm from '@/components/Panels/LoginForm'
import TopPlayers from '@/components/Panels/TopPlayers'
import TopGuilds from '@/components/Panels/TopGuilds'
import Banner from '@/components/Home/Banner'
import RecentNews from '@/components/Home/RecentNews'
import Promotion from '@/components/Panels/Promotion'
import ScreenShots from '@/components/Home/ScreenShots'

export default async function Home() {
  return (
    <div>
      <section className="relative flex min-h-[800px] w-full overflow-visible">
        {/* Base background image */}
        <Image
          src="/home/hero.png"
          alt=""
          width={3120}
          height={2646}
          className="absolute inset-0 w-full object-cover object-top-right"
          priority
        />
        <div className="relative container flex">
          <div className="relative z-10 -mt-20 flex max-w-1/2 flex-1 flex-col items-center justify-center gap-y-6">
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
            className="absolute right-0 mt-20 mr-8 w-[720px]"
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
        <div className="relative z-10 container grid grid-cols-12 gap-x-4 px-5">
          <div className="col-span-4 flex flex-col gap-y-4">
            <LoginForm />
            <Promotion
              background="/scenes/dusk.png"
              icon="/emblems/discord.png"
              title="Join Our Discord"
              details="Free cross cash, get updated with the events and updates"
            />
            <Promotion
              background="/scenes/forest.png"
              icon="/emblems/gift.png"
              title="Rewards"
              details="Free cross cash, get updated with the events and updates"
            />
            <Promotion
              background="/scenes/desert.png"
              icon="/emblems/download.png"
              title="Download"
              details="Free cross cash, get updated with the events and updates"
            />
            <TopPlayers />
            <TopGuilds />
          </div>
          <div className="col-span-8">
            <Banner />
            <RecentNews />
            <ScreenShots />
          </div>
        </div>
      </div>
    </div>
  )
}
