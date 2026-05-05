'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/components/Logo'

const links = [
  { href: '/', label: 'HOME' },
  { href: '/download', label: 'DOWNLOAD' },
  { href: '/top-players', label: 'TOP PLAYERS' },
  { href: '/top-guilds', label: 'TOP GUILDS' },
  { href: '/about', label: 'ABOUT US' },
]

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative hidden min-w-[100px] items-center justify-center gap-[6px] overflow-hidden rounded-[4px] bg-[#676d83] px-6 py-2 tracking-normal transition-[filter] duration-200 hover:[filter:brightness(1.24)] md:flex"
      style={{
        backgroundImage: "url('/bg-texture.webp')",
        backgroundSize: '400px',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Link>
  )
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-philosopher relative bg-clip-text text-base font-bold whitespace-nowrap text-transparent"
      style={{
        backgroundImage: 'linear-gradient(94deg, rgb(192,243,255) 0%, rgb(126,181,247) 100%)',
        textShadow: '0px 0px 24px rgba(234,236,243,0.32)',
      }}
    >
      {children}
    </span>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`navbar fixed inset-x-0 top-0 z-100 flex items-center bg-[rgba(37,42,60,0.24)] py-3 lg:py-0${menuOpen ? ' menu-open' : ''}`}>
      <div className="relative container flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-x-7">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden items-center lg:flex">
            {links.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={[
                  'nav-link cursor-pointer border-r border-[#1D233164] px-5 py-6 text-sm xl:px-6',
                  i === 0 ? 'border-l' : '',
                  pathname === href ? 'nav-link-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <NavButton href="/login">
            <Image src="/icons/login.svg" alt="" width={16} height={16} />
            <GradientText>Log in</GradientText>
          </NavButton>

          <NavButton href="/register">
            <Image src="/icons/register.svg" alt="" width={18} height={18} />
            <GradientText>Register</GradientText>
          </NavButton>

          <button
            className="flex flex-col justify-center gap-[5px] p-1 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <>
                <span className="block h-[2px] w-6 translate-y-[3.5px] rotate-45 bg-white" />
                <span className="block h-[2px] w-6 -translate-y-[3.5px] -rotate-45 bg-white" />
              </>
            ) : (
              <>
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
