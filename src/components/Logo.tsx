import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center gap-x-3">
      <Image src="/logo-icon.png" className="h-[48px] w-auto" alt="" width={74} height={96} />
      <Image src="/logo-text.svg" className="h-[24px] w-[82px]" alt="Cross MU Online" width={82} height={24} />
    </div>
  )
}
