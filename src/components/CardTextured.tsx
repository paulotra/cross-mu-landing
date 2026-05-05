import { HTMLAttributes } from 'react'
import Image from 'next/image'

type CardTexturedProps = HTMLAttributes<HTMLDivElement>

export default function CardTextured({ className = '', children, ...props }: CardTexturedProps) {
  return (
    <div
      {...props}
      className={`relative bg-[url('/btn-texture.png')] bg-[length:1621px_772px] bg-[position:0_0] bg-no-repeat p-8 [box-shadow:0_12px_32px_rgba(0,0,0,0.40)] ${className}`}
    >
      <Image
        src="/card-corner.png"
        alt=""
        width={54}
        height={42}
        className="absolute top-[2px] left-[2px] -mx-3 -my-3"
      />
      <Image
        src="/card-corner.png"
        alt=""
        width={54}
        height={42}
        className="absolute top-[2px] right-[2px] -mx-3 -my-3 scale-x-[-1]"
      />
      {children}
    </div>
  )
}
