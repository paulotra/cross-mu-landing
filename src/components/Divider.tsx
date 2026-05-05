import Image from 'next/image'

export default function Divider() {
  return (
    <div className="relative h-px w-full mix-blend-screen">
      <Image src="/ui-line.svg" alt="" fill className="object-cover" />
    </div>
  )
}
