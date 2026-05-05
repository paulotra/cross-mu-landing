import Image from 'next/image'
import CardTextured from '@/components/CardTextured'
import Divider from '@/components/Divider'

const guilds = [
  { rank: 1, name: 'Invictus', score: 8919, emblem: '/guilds/guild-1.png' },
  { rank: 2, name: 'Navi', score: 7256, emblem: '/guilds/guild-2.png' },
  { rank: 3, name: 'NiceBro', score: 1856, emblem: '/guilds/guild-3.png' },
  { rank: 4, name: 'Supremo', score: 456, emblem: '/guilds/guild-4.png' },
  { rank: 5, name: 'C-Corp', score: 126, emblem: '/guilds/guild-5.png' },
]

export default function TopGuilds() {
  return (
    <CardTextured className="pb-8" corners={true}>
      <div className="mb-1 flex items-center justify-between">
        <h3 className="font-philosopher flex items-center gap-x-3 text-xl font-bold">
          <Image src="/gem.webp" className="rotate-90" alt="" width={24} height={16} />
          Top Guilds
        </h3>
        <Image src="/logo-icon-small.webp" alt="" width={28} height={38} />
      </div>
      <p className="mb-6 text-xs">The best guilds of Cross MU Online</p>

      <Divider />

      {/* Header */}
      <div className="mt-3 mb-2 flex items-center justify-between text-[13px] font-light tracking-[0.28px] text-[#78b9ff]">
        <span className="w-[80px]">#</span>
        <span className="flex-1">Name</span>
        <span className="flex-1 text-right">Score</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-y-3">
        {guilds.map(({ rank, name, score, emblem }) => (
          <div key={rank} className="flex items-center justify-between text-sm text-white">
            <div className="flex w-[80px] items-center gap-x-3">
              <span className="w-4 font-light">{rank}.</span>
              <Image
                src={emblem}
                alt={name}
                width={64}
                height={64}
                className="h-[16px] w-[16px] object-cover"
              />
            </div>
            <span className="flex-1 font-light">{name}</span>
            <span className="flex-1 text-right font-medium">{score}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Divider />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Image src="/clock.svg" alt="" width={20} height={20} />
          <span className="text-[12px] font-light tracking-[0.24px] whitespace-nowrap text-white">
            Resets in 23:14
          </span>
        </div>
        <a
          href="#"
          className="text-[12px] font-light tracking-[0.24px] whitespace-nowrap text-[#78b9ff]"
        >
          See All
        </a>
      </div>
    </CardTextured>
  )
}
