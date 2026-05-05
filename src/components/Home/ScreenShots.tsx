import Image from 'next/image'
import Divider from '@/components/Divider'
import CardTextured from '@/components/CardTextured'

const images = Array(8).fill('/screenshots/1.webp')

export default function ScreenShots() {
  return (
    <CardTextured corners={false} ribbon={true} className="mt-20">
      <div className="mt-6 mb-6 flex items-center gap-x-4">
        <Divider />
        <Image src="/gem.webp" alt="" width={24} height={16} />
        <h3 className="font-philosopher gap-x-4 text-xl font-bold whitespace-nowrap">
          Screenshots
        </h3>
        <Image src="/gem.webp" alt="" width={24} height={16} />
        <Divider />
      </div>

      {/* Marquee wrapper with left/right fade mask */}
      <div
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="animate-marquee flex w-max gap-x-2">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="relative h-[200px] w-[267px] shrink-0 overflow-hidden">
              <Image
                src={src}
                alt=""
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </CardTextured>
  )
}
