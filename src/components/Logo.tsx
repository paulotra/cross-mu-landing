import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center gap-x-3">
      <Image src="/logo-icon-small.png" alt="" width={37} height={48} />
      <Image
        src="/logo-text.svg"
        className="h-[24px] w-[82px]"
        alt="Cross MU Online"
        width={82}
        height={24}
      />
    </div>
  )
}
