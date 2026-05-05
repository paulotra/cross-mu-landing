import Image from 'next/image'

export default function KanturuAwakens() {
  return (
    <div className="relative flex h-[303px] flex-col items-start justify-between overflow-hidden bg-[url('/home/banner.webp')] bg-cover bg-[position:center_right] p-8">
      {/* Background character image */}

      {/* Top: title + tagline */}
      <div className="relative flex flex-col gap-4">
        <Image src="/kanturu-a.svg" alt="Kanturu Awakens" width={231} height={119} />
        <p className="-mt-3 text-base text-white">
          Face Nightmare. Challenge the Core. Claim Divine Rewards.
        </p>
      </div>

      {/* Bottom: description */}
      <p className="relative mt-10 text-xs text-white/80">
        Venture into the ancient ruins of Kanturu, where mechanical horrors guard powerful relics.
        <br />
        Defeat Nightmare and conquer the Refinery to unlock exclusive rewards.
      </p>
    </div>
  )
}
