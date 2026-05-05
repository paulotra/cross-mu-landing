import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'default' | 'large'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  default: 'min-w-[100px] px-5 py-3 text-base',
  large: 'min-w-[280px] px-6 py-6 text-2xl',
}

export default function Button({
  variant = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`font-philosopher relative cursor-pointer bg-[#676d83] font-bold whitespace-nowrap text-white [box-shadow:0_12px_32px_rgba(0,0,0,0.40)] [text-shadow:0px_0px_24px_rgba(234,236,243,0.32)] ${variantClasses[variant]} ${className}`}
    >
      <span className="absolute inset-0 overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-[126px] -left-[107px] h-[574px] w-[568px] bg-[url('/btn-texture.png')] bg-[length:568px_574px] bg-[position:20%_30%] bg-no-repeat"
        />
      </span>
      <span className="absolute top-[-4px] right-0 left-0 h-[4px] bg-[url('/btn/btn-border-t.svg')]"></span>
      <span className="absolute top-0 bottom-0 left-0 w-[4px] bg-[url('/btn/btn-border-l.svg')]"></span>
      <span className="absolute top-0 right-0 bottom-0 w-[4px] bg-[url('/btn/btn-border-r.svg')]"></span>
      <span className="absolute right-0 bottom-[-4px] left-0 h-[4px] bg-[url('/btn/btn-border-b.svg')]"></span>
      <Image
        src="/btn/btn-corners.png"
        alt=""
        width={50}
        height={34}
        className="absolute bottom-0 left-0 -mx-3 -my-4"
      />
      <Image
        src="/btn/btn-corners.png"
        alt=""
        width={50}
        height={34}
        className="absolute top-0 right-0 -mx-3 -my-4 rotate-180"
      />
      <Image
        src="/btn/btn-corners.png"
        alt=""
        width={50}
        height={34}
        className="absolute top-0 left-0 -mx-3 -my-4 scale-x-[-1] rotate-180"
      />
      <Image
        src="/btn/btn-corners.png"
        alt=""
        width={50}
        height={34}
        className="absolute right-0 bottom-0 -mx-3 -my-4 scale-x-[-1]"
      />
      {variant === 'large' && (
        <Image
          src="/btn/btn-header.png"
          alt=""
          width={127}
          height={30}
          className="absolute top-[-1px] right-0 left-0 mx-auto -my-4"
        />
      )}
      <span className="relative tracking-normal">{children}</span>
    </button>
  )
}
