import Image from 'next/image'

type PromotionProps = {
  background: string
  icon: string
  title: string
  details: string
}

export default function Promotion({ background, icon, title, details }: PromotionProps) {
  return (
    <div className="scrub relative overflow-hidden rounded-xs">
      <div
        className="absolute inset-0 z-10 opacity-80"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,.4) -20%, rgb(0,0,0,.92) 60%)',
        }}
      />
      <Image src={background} alt="" fill className="object-cover" />
      <div className="relative z-10 flex items-center px-6 py-4">
        <Image src={icon} alt={title} width={100} height={100} className="-ml-2" />
        <div>
          <h3 className="font-philosopher mb-1 text-2xl font-bold">{title}</h3>
          <p className="text-sm font-light text-white">{details}</p>
        </div>
      </div>
    </div>
  )
}
