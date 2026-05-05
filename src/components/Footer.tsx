import Image from 'next/image'
import Divider from '@/components/Divider'

const columns = [
  {
    title: 'Information',
    links: ['About Game', 'Terms of Service', 'Privacy Policy'],
  },
  {
    title: 'How To Begin',
    links: ['Register', 'Game Download', 'Account Panel'],
  },
  {
    title: 'Community',
    links: ['Discord', 'Forum', 'Game Guides'],
  },
  {
    title: 'Socials',
    links: ['Facebook', 'Instagram'],
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 -mt-[100px] bg-[url('/bg-scales.png')] bg-cover bg-[position:center_50%] bg-no-repeat pt-[200px] pb-10">
      <div className="container flex flex-col gap-12 px-4">
        {/* Top emblem + dividers */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Divider />
          </div>
          <Image
            src="/logo-icon-small.png"
            alt="Cross MU Online"
            width={64}
            height={64}
            className="h-12 w-auto"
          />
          <div className="flex-1">
            <Divider />
          </div>
        </div>

        {/* Link columns */}
        <div className="flex gap-2">
          {columns.map(({ title, links }) => (
            <div key={title} className="flex w-[310px] flex-col gap-8">
              {/* Column heading */}
              <div className="flex items-center gap-3">
                <Image
                  src="/gem.png"
                  alt=""
                  width={13}
                  height={20}
                  className="h-4 w-auto -scale-y-100 rotate-90"
                />
                <h4 className="font-philosopher text-xl font-bold text-white">{title}</h4>
              </div>
              {/* Links */}
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="flex items-center gap-5 text-base text-white">
                      <span className="ml-2 text-lg text-white">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-8">
          <Divider />
          <div className="flex items-center justify-between">
            <p className="w-[400px] text-sm font-light tracking-[0.28px] text-white">
              © 2026 - Cross MU Online. All rights reserved.
            </p>
            <Image src="/logo-emblem.png" alt="" width={99} height={66} className="h-14 w-auto" />
            <p className="w-[400px] text-right text-sm font-light tracking-[0.28px] text-white">
              Designed By Cross Studio Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
