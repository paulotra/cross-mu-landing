import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Navbar() {
  return (
    <nav className="navbar fixed inset-x-0 top-0 z-100 flex items-center bg-[rgba(37,42,60,0.24)] py-3">
      <div className="relative mx-auto flex w-full max-w-[1262px] items-center px-4">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </nav>
  )
}
