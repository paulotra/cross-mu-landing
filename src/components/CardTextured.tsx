import { HTMLAttributes } from 'react'
import Image from 'next/image'

type CardTexturedProps = HTMLAttributes<HTMLDivElement> & {
  corners?: boolean
  ribbon?: boolean
}

export default function CardTextured({
  className = '',
  corners = true,
  ribbon = false,
  children,
  ...props
}: CardTexturedProps) {
  return (
    <div
      {...props}
      className={`scrub relative bg-[url('/btn-texture.webp')] bg-[length:1621px_772px] bg-[position:0_0] bg-no-repeat p-8 [box-shadow:0_12px_32px_rgba(0,0,0,0.40)] ${className}`}
    >
      {corners && (
        <>
          <Image
            src="/card-corner.webp"
            alt=""
            width={54}
            height={42}
            className="absolute top-[2px] left-[2px] -mx-3 -my-3"
          />
          <Image
            src="/card-corner.webp"
            alt=""
            width={54}
            height={42}
            className="absolute top-[2px] right-[2px] -mx-3 -my-3 scale-x-[-1]"
          />
        </>
      )}
      {ribbon && (
        <Image
          src="/btn/btn-header.webp"
          alt=""
          width={127}
          height={30}
          className="absolute top-[-1px] right-0 left-0 mx-auto -my-4"
        />
      )}
      {children}
    </div>
  )
}
