import Image from 'next/image'
import Divider from '@/components/Divider'
import NewsCard from '@/components/Home/NewsCard'
import Button from '@/components/Button'

export default function RecentNews() {
  return (
    <div>
      <div className="mt-6 flex items-center gap-x-4">
        <Divider />
        <Image src="/gem.png" alt="" width={24} height={16} />
        <h2 className="font-philosopher text-3xl whitespace-nowrap">Latest News</h2>
        <Image src="/gem.png" alt="" width={24} height={16} />
        <Divider />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <NewsCard
          title="Today big updates have been applied to server! Enjoy the game!"
          description="New epic wings for Wings of Darkness for Muse Elfves for 4th class. Features: Grow Lance Archangel's Absolute Weapon."
          image="/news/1.png"
          day={12}
          date="/05/2026"
        />
        <NewsCard
          title="Today big updates have been applied to server! Enjoy the game!"
          description="New epic wings for Wings of Darkness for Muse Elfves for 4th class. Features: Grow Lance Archangel's Absolute Weapon."
          image="/news/1.png"
          day={12}
          date="/05/2026"
        />
        <NewsCard
          title="Today big updates have been applied to server! Enjoy the game!"
          description="New epic wings for Wings of Darkness for Muse Elfves for 4th class. Features: Grow Lance Archangel's Absolute Weapon."
          image="/news/1.png"
          day={12}
          date="/05/2026"
        />
        <NewsCard
          title="Today big updates have been applied to server! Enjoy the game!"
          description="New epic wings for Wings of Darkness for Muse Elfves for 4th class. Features: Grow Lance Archangel's Absolute Weapon."
          image="/news/1.png"
          day={12}
          date="/05/2026"
        />
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Button variant="medium">
          <a href="">See All News</a>
        </Button>
      </div>
    </div>
  )
}
