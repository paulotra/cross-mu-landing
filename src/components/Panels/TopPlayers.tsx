import Image from 'next/image'
import CardTextured from '@/components/CardTextured'
import Divider from '@/components/Divider'

const players = [
  { rank: 1, name: 'Lorem', kills: 325, portrait: '/characters/class-1.png', w: 500, h: 440 },
  { rank: 2, name: 'Ipsum', kills: 280, portrait: '/characters/class-2.png', w: 250, h: 220 },
  { rank: 3, name: 'Dolor', kills: 258, portrait: '/characters/class-3.png', w: 250, h: 220 },
  { rank: 4, name: 'Seit', kills: 154, portrait: '/characters/class-1.png', w: 500, h: 440 },
  { rank: 5, name: 'Amet', kills: 43, portrait: '/characters/class-4.png', w: 250, h: 220 },
]

export default function TopPlayers() {
  return (
    <CardTextured corners={true} className="pb-8">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="font-philosopher flex items-center gap-x-3 text-xl font-bold">
          <Image src="/gem.webp" className="rotate-90" alt="" width={24} height={16} />
          Top Players
        </h3>
        <Image src="/logo-icon-small.webp" alt="" width={28} height={38} />
      </div>
      <p className="mb-6 text-xs">The best players of Cross MU Online</p>

      <Divider />

      {/* Header */}
      <div className="mt-3 mb-2 flex items-center justify-between text-[13px] font-light tracking-[0.28px] text-[#78b9ff]">
        <span className="w-[80px]">#</span>
        <span className="flex-1">Name</span>
        <span className="flex-1 text-right">Kills</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-y-3">
        {players.map(({ rank, name, kills, portrait, w, h }) => (
          <div key={rank} className="flex items-center justify-between text-sm text-white">
            <div className="flex w-[80px] items-center gap-x-3">
              <span className="w-4 font-light">{rank}.</span>
              <Image
                src={portrait}
                alt={name}
                width={w}
                height={h}
                className="h-[16px] w-[18px] object-cover"
              />
            </div>
            <span className="flex-1 font-light">{name}</span>
            <span className="flex-1 text-right font-medium">{kills}</span>
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
