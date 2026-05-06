import Hero from '@/components/Home/Hero'
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
      <Hero />
      <div className="relative">
        <div className="relative z-10 container grid-cols-12 gap-x-4 px-5 lg:grid">
          <div className="flex flex-col gap-y-4 lg:col-span-4">
            <LoginForm />
            <Promotion
              background="/scenes/dusk.webp"
              icon="/emblems/discord.webp"
              title="Join Our Discord"
              details="Free cross cash, get updated with the events and updates"
            />
            <Promotion
              background="/scenes/forest.webp"
              icon="/emblems/gift.webp"
              title="Rewards"
              details="Free cross cash, get updated with the events and updates"
            />
            <Promotion
              background="/scenes/desert.webp"
              icon="/emblems/download.webp"
              title="Download"
              details="Free cross cash, get updated with the events and updates"
            />
            <TopPlayers />
            <TopGuilds />
          </div>
          <div className="mt-4 md:mt-0 lg:col-span-8">
            <Banner />
            <RecentNews />
            <ScreenShots />
          </div>
        </div>
      </div>
    </div>
  )
}
