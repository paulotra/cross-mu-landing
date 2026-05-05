import Image from 'next/image'
import CardTextured from '@/components/CardTextured'
import Button from '@/components/Button'

type NewsCardProps = {
  title: string
  description: string
  image: string
  day: number
  date: string
  href?: string
}

export default function NewsCard({
  title,
  description,
  image,
  day,
  date,
  href = '#',
}: NewsCardProps) {
  return (
    <CardTextured className="flex flex-col gap-6 p-6" corners={false}>
      {/* Title */}
      <p className="text-base leading-6 font-light tracking-[0.32px] text-white">{title}</p>

      {/* Image */}
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={700}
          height={532}
          className="-mt-20 h-auto w-full object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-xs leading-5 font-light tracking-[0.24px] text-[rgba(206,226,255,0.8)]">
        {description}
      </p>

      {/* Footer: date + button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div
            className="font-philosopher flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-base font-bold text-[#1a233c]"
            style={{
              backgroundImage: 'linear-gradient(92deg, rgb(192,243,255) 0%, rgb(126,181,247) 100%)',
            }}
          >
            {day}
          </div>
          <span className="text-xs font-light tracking-[0.24px] text-[rgba(206,226,255,0.8)]">
            {date}
          </span>
        </div>
        <Button variant="default">
          <a href={href}>Read more</a>
        </Button>
      </div>
    </CardTextured>
  )
}
